import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  UserCheck,
  Building2,
  Lock,
  Mail,
  Phone,
  AlertCircle,
  CheckCircle2,
  Eye,
  EyeOff,
  Briefcase,
  UtensilsCrossed,
  QrCode,
  Crown,
} from 'lucide-react';
import { useAppStore } from '@/stores/useAppStore';
import { supabase, isSupabaseConfigured } from '@/services/supabase';
import { UserRole } from '@/types';

interface LoginPageProps {
  initialTab?: 'login' | 'signup';
}

export const LoginPage: React.FC<LoginPageProps> = ({ initialTab }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { loginAsUser, loginAsDemoUser, userEmail } = useAppStore();

  const savedEmail = typeof window !== 'undefined' ? localStorage.getItem('INVITEDECIDE_LAST_EMAIL') || '' : '';

  React.useEffect(() => {
    if (userEmail && userEmail !== 'organizer@invitedecide.com') {
      navigate('/dashboard', { replace: true });
      return;
    }

    if (isSupabaseConfigured) {
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (session?.user) {
          const role = (session.user.user_metadata?.role as UserRole) || 'owner';
          const name = session.user.user_metadata?.full_name || session.user.email?.split('@')[0] || 'Organizer';
          const org = session.user.user_metadata?.organization_name || `${name}'s Events`;

          loginAsUser({
            id: session.user.id,
            email: session.user.email || '',
            name,
            role,
            orgName: org,
          }).then(() => {
            navigate('/dashboard', { replace: true });
          });
        }
      });
    }
  }, [userEmail, navigate, loginAsUser]);

  const isSignUpPath = location.pathname.includes('register') || initialTab === 'signup';
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>(isSignUpPath ? 'signup' : 'login');

  // Login form state
  const [loginEmail, setLoginEmail] = useState(savedEmail);
  const [loginPassword, setLoginPassword] = useState('');

  // Signup form state
  const [fullName, setFullName] = useState('');
  const [orgName, setOrgName] = useState('');
  const [phone, setPhone] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupRole, setSignupRole] = useState<UserRole>('owner');

  // UI state
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // 1. Handle Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
    setIsLoading(true);
    if (typeof window !== 'undefined') {
      localStorage.setItem('INVITEDECIDE_LAST_EMAIL', signupEmail.trim());
    }

    const emailClean = loginEmail.trim();
    if (typeof window !== 'undefined') {
      localStorage.setItem('INVITEDECIDE_LAST_EMAIL', emailClean);
    }

    try {
      // Check if user is logging into the demo account
      if (emailClean.toLowerCase().includes('demo') || emailClean.toLowerCase().includes('organizer@invitedecide.com')) {
        loginAsDemoUser('owner');
        setSuccessMessage('Logged in to Interactive Wedding Demo! Redirecting...');
        setTimeout(() => navigate('/dashboard'), 400);
        return;
      }

      if (isSupabaseConfigured) {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: emailClean,
          password: loginPassword,
        });

        if (error) {
          setErrorMessage(
            `${error.message}. Please verify your credentials, or click "Instant Demo Access" below.`
          );
          setIsLoading(false);
          return;
        }

        if (data.user) {
          const role = (data.user.user_metadata?.role as UserRole) || 'owner';
          const name = data.user.user_metadata?.full_name || emailClean.split('@')[0];
          const org = data.user.user_metadata?.organization_name || `${name}'s Celebrations`;

          await loginAsUser({
            id: data.user.id,
            email: data.user.email || emailClean,
            name,
            role,
            orgName: org,
            isNewAccount: false,
          });

          setSuccessMessage('Logged in successfully! Loading your workspace...');
          setTimeout(() => navigate('/dashboard'), 500);
          return;
        }
      }

      // Offline / Local Real Account Login
      const name = emailClean.split('@')[0];
      await loginAsUser({
        email: emailClean,
        name: name.charAt(0).toUpperCase() + name.slice(1),
        role: 'owner',
        orgName: `${name.charAt(0).toUpperCase() + name.slice(1)}'s Events`,
        isNewAccount: false,
      });

      setSuccessMessage('Logged in successfully to your personal workspace! Redirecting...');
      setTimeout(() => navigate('/dashboard'), 400);
    } catch (err: any) {
      setErrorMessage(err.message || 'Login encountered an unexpected error.');
    } finally {
      setIsLoading(false);
    }
  };

  // 2. Handle Sign Up (Creates real clean account with 0 fake guests)
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (signupPassword.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      return;
    }

    setIsLoading(true);
    if (typeof window !== 'undefined') {
      localStorage.setItem('INVITEDECIDE_LAST_EMAIL', signupEmail.trim());
    }

    try {
      if (isSupabaseConfigured) {
        const { data, error } = await supabase.auth.signUp({
          email: signupEmail,
          password: signupPassword,
          options: {
            data: {
              full_name: fullName,
              organization_name: orgName,
              phone,
              role: signupRole,
            },
          },
        });

        if (error) {
          setErrorMessage(error.message);
          setIsLoading(false);
          return;
        }

        // Successfully created in Supabase -> initialize their clean workspace
        await loginAsUser({
          id: data.user?.id,
          email: signupEmail,
          name: fullName,
          role: signupRole,
          orgName,
          isNewAccount: true,
        });

        setSuccessMessage('Account created successfully! Welcome to your fresh workspace.');
        setTimeout(() => navigate('/dashboard'), 600);
        return;
      }

      // Local / Offline Sign Up -> initialize clean workspace with 0 fake guests
      await loginAsUser({
        email: signupEmail,
        name: fullName || 'Organizer',
        role: signupRole,
        orgName: orgName || 'Celebrations Organization',
        isNewAccount: true,
      });

      setSuccessMessage('Account registered successfully! Welcome to your fresh workspace.');
      setTimeout(() => navigate('/dashboard'), 400);
    } catch (err: any) {
      setErrorMessage(err.message || 'Sign up encountered an unexpected error.');
    } finally {
      setIsLoading(false);
    }
  };

  // 3. Fast Instant Demo Login (Loads the 500-guest demo dataset)
  const handleFastDemoLogin = (role: UserRole, targetRoute: string = '/dashboard') => {
    loginAsDemoUser(role);
    navigate(targetRoute);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-rose-950 flex flex-col items-center justify-center p-4">
      {/* Top Header Bar */}
      <div className="w-full max-w-md flex items-center justify-between mb-4 px-1">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
        >
          <span>← Back to Homepage</span>
        </Link>
        <Badge
          variant="outline"
          className="border-amber-500/30 text-amber-300 text-[10px] bg-amber-500/10 px-2 py-0.5"
        >
          {isSupabaseConfigured ? '🟢 Supabase Cloud' : '⚡ Interactive Local Mode'}
        </Badge>
      </div>

      <Card className="w-full max-w-md bg-zinc-900/90 border-zinc-800 text-white shadow-2xl backdrop-blur-md">
        <CardHeader className="text-center space-y-2 pb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-600 to-amber-500 text-white shadow-lg mx-auto">
            <Sparkles className="h-6 w-6" />
          </div>
          <CardTitle className="text-2xl font-black font-display tracking-tight text-white">
            InviteDecide
          </CardTitle>
          <CardDescription className="text-zinc-400 text-xs">
            Complete Event Invitation, RSVP, Catering & Gate Pass Management
          </CardDescription>

          {/* Tab Selector: Log In vs Sign Up */}
          <div className="grid grid-cols-2 gap-1 p-1 bg-zinc-950/80 rounded-xl border border-zinc-800 mt-2">
            <button
              type="button"
              onClick={() => {
                setActiveTab('login');
                setErrorMessage('');
                setSuccessMessage('');
              }}
              className={`py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'login'
                  ? 'bg-amber-500 text-zinc-950 shadow-md font-bold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              🔑 Log In
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab('signup');
                setErrorMessage('');
                setSuccessMessage('');
              }}
              className={`py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'signup'
                  ? 'bg-amber-500 text-zinc-950 shadow-md font-bold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              ✨ Sign Up / Register
            </button>
          </div>
        </CardHeader>

        <CardContent className="space-y-4 pt-1">
          {/* Notifications */}
          {errorMessage && (
            <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-400" />
              <span>{errorMessage}</span>
            </div>
          )}

          {successMessage && (
            <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
              <span>{successMessage}</span>
            </div>
          )}

          {/* TAB 1: LOG IN FORM */}
          {activeTab === 'login' && (
            <form onSubmit={handleLogin} className="space-y-3 text-xs">
              <div>
                <label className="text-zinc-300 font-medium flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-amber-400" /> Email Address
                </label>
                <Input
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="e.g. host@myevents.com"
                  required
                  className="mt-1 bg-zinc-950 border-zinc-700 text-xs text-white placeholder:text-zinc-600 focus:border-amber-500"
                />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label className="text-zinc-300 font-medium flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-amber-400" /> Password
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-[11px] text-zinc-400 hover:text-amber-400 flex items-center gap-1"
                  >
                    {showPassword ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="mt-1 bg-zinc-950 border-zinc-700 text-xs text-white placeholder:text-zinc-600 focus:border-amber-500"
                />
              </div>

              <Button
                type="submit"
                variant="gold"
                disabled={isLoading}
                className="w-full mt-3 font-bold text-xs py-2.5 bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white shadow-lg"
              >
                {isLoading ? 'Authenticating...' : 'Log In to My Workspace'}
              </Button>
            </form>
          )}

          {/* TAB 2: SIGN UP / REGISTER FORM */}
          {activeTab === 'signup' && (
            <form onSubmit={handleSignUp} className="space-y-2.5 text-xs">
              <div>
                <label className="text-zinc-300 font-medium flex items-center gap-1.5">
                  <UserCheck className="w-3.5 h-3.5 text-amber-400" /> Full Name
                </label>
                <Input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g., Rajesh Sharma"
                  required
                  className="mt-1 bg-zinc-950 border-zinc-700 text-xs text-white placeholder:text-zinc-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-zinc-300 font-medium flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-amber-400" /> Organization / Family
                  </label>
                  <Input
                    type="text"
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    placeholder="e.g., Sharma Family"
                    required
                    className="mt-1 bg-zinc-950 border-zinc-700 text-xs text-white placeholder:text-zinc-600"
                  />
                </div>

                <div>
                  <label className="text-zinc-300 font-medium flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-amber-400" /> WhatsApp Number
                  </label>
                  <Input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    required
                    className="mt-1 bg-zinc-950 border-zinc-700 text-xs text-white placeholder:text-zinc-600"
                  />
                </div>
              </div>

              <div>
                <label className="text-zinc-300 font-medium flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-amber-400" /> Email Address
                </label>
                <Input
                  type="email"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  placeholder="you@domain.com"
                  required
                  className="mt-1 bg-zinc-950 border-zinc-700 text-xs text-white placeholder:text-zinc-600"
                />
              </div>

              <div>
                <label className="text-zinc-300 font-medium flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-amber-400" /> Create Password (min 6 chars)
                </label>
                <Input
                  type="password"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="mt-1 bg-zinc-950 border-zinc-700 text-xs text-white placeholder:text-zinc-600"
                />
              </div>

              <div>
                <label className="text-zinc-300 font-medium flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-amber-400" /> Primary Role
                </label>
                <select
                  value={signupRole}
                  onChange={(e) => setSignupRole(e.target.value as UserRole)}
                  className="mt-1 w-full rounded-md border border-zinc-700 bg-zinc-950 px-3 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                >
                  <option value="owner">Wedding Host / Event Owner</option>
                  <option value="event_manager">Professional Event Planner</option>
                  <option value="catering_manager">Catering Lead / Food Manager</option>
                  <option value="vendor">Vendor / External Partner</option>
                </select>
              </div>

              <Button
                type="submit"
                variant="gold"
                disabled={isLoading}
                className="w-full mt-3 font-bold text-xs py-2.5 bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white shadow-lg"
              >
                {isLoading ? 'Creating Fresh Workspace...' : 'Create My Account & Start Planning'}
              </Button>
            </form>
          )}

          {/* Quick Instant Demo Logins */}
          <div className="pt-3 border-t border-zinc-800 space-y-2">
            <p className="text-[11px] text-zinc-400 text-center font-medium">
              ⚡ Explore Pre-Loaded Wedding Demo (500 Families):
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => handleFastDemoLogin('owner', '/dashboard')}
                className="bg-zinc-800/80 border-zinc-700 text-zinc-200 hover:bg-amber-500/20 hover:text-amber-300 hover:border-amber-500/50 text-[11px] justify-start px-2.5"
              >
                <Crown className="w-3.5 h-3.5 mr-1 text-amber-400 shrink-0" />
                <span className="truncate">Wedding Host / Owner</span>
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => handleFastDemoLogin('event_manager', '/events')}
                className="bg-zinc-800/80 border-zinc-700 text-zinc-200 hover:bg-rose-500/20 hover:text-rose-300 hover:border-rose-500/50 text-[11px] justify-start px-2.5"
              >
                <Sparkles className="w-3.5 h-3.5 mr-1 text-rose-400 shrink-0" />
                <span className="truncate">Event Planner</span>
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => handleFastDemoLogin('checkin_operator', '/checkin')}
                className="bg-zinc-800/80 border-zinc-700 text-zinc-200 hover:bg-emerald-500/20 hover:text-emerald-300 hover:border-emerald-500/50 text-[11px] justify-start px-2.5"
              >
                <QrCode className="w-3.5 h-3.5 mr-1 text-emerald-400 shrink-0" />
                <span className="truncate">Gate Check-in Staff</span>
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => handleFastDemoLogin('vendor', '/vendor')}
                className="bg-zinc-800/80 border-zinc-700 text-zinc-200 hover:bg-purple-500/20 hover:text-purple-300 hover:border-purple-500/50 text-[11px] justify-start px-2.5"
              >
                <UtensilsCrossed className="w-3.5 h-3.5 mr-1 text-purple-400 shrink-0" />
                <span className="truncate">Caterer Vendor</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

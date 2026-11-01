import React, { useState } from 'react';
import { BlockDefinition, BlockRenderProps } from '../types';
import { ShoppingCart, Calendar, Check, Trash2, Plus, Filter, Search, ShieldCheck, User, Save, RefreshCw } from 'lucide-react';

// 1. Ecommerce Product Catalog Grid
export const EcommerceProductGridBlock: BlockDefinition = {
  type: 'ecommerce-product-grid',
  name: 'Product Catalog Grid',
  category: 'ecommerce',
  description: 'Product listing cards with pricing, ratings, badges, and Add to Cart action.',
  iconName: 'ShoppingBag',
  defaultProps: {
    title: 'Featured Collection',
    products: [
      { id: '1', name: 'Studio Mechanical Keyboard', price: '$149.00', category: 'Hardware', rating: '4.9', image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=400&q=80' },
      { id: '2', name: 'Ergonomic Desk Mat Pro', price: '$39.00', category: 'Accessories', rating: '4.8', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=400&q=80' },
      { id: '3', name: 'Precision Wireless Trackball', price: '$89.00', category: 'Hardware', rating: '4.7', image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=400&q=80' },
      { id: '4', name: 'Noise-Cancelling Studio Monitor', price: '$299.00', category: 'Audio', rating: '5.0', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80' },
    ],
  },
  fields: {
    title: { type: 'text', label: 'Section Title' },
  },
  render: ({ props }: BlockRenderProps) => {
    const [cartCount, setCartCount] = useState(0);

    return (
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-extrabold">{props.title}</h2>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs">
              <ShoppingCart className="w-4 h-4 text-blue-400" />
              <span>Cart: {cartCount} items</span>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(props.products || []).map((p: any) => (
              <div key={p.id} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between group">
                <div className="space-y-3">
                  <div className="aspect-square rounded-xl overflow-hidden bg-slate-900">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-blue-400">{p.category}</span>
                    <h4 className="text-sm font-bold text-white mt-0.5">{p.name}</h4>
                    <span className="text-base font-extrabold text-white mt-1 block">{p.price}</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setCartCount((c) => c + 1)}
                  className="mt-4 w-full py-2.5 rounded-lg bg-blue-600 text-xs font-bold text-white hover:bg-blue-500 transition-colors shadow"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  },
};

// 2. Ecommerce Shopping Cart Drawer
export const EcommerceCartDrawerBlock: BlockDefinition = {
  type: 'ecommerce-cart-drawer',
  name: 'Shopping Cart Summary Drawer',
  category: 'ecommerce',
  description: 'Cart summary view with item quantities, price calculations, and checkout trigger.',
  iconName: 'ShoppingCart',
  defaultProps: {
    title: 'Your Shopping Cart (2 items)',
    subtotal: '$188.00',
    shipping: 'Free Global Express',
    total: '$188.00',
  },
  fields: {
    title: { type: 'text', label: 'Cart Title' },
  },
  render: ({ props }: BlockRenderProps) => (
    <section className="py-16 bg-slate-950 text-white">
      <div className="max-w-md mx-auto p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl space-y-6">
        <h3 className="text-base font-bold border-b border-slate-800 pb-4">{props.title}</h3>
        <div className="space-y-4 text-xs">
          <div className="flex justify-between items-center pb-3 border-b border-slate-800/60">
            <div>
              <p className="font-bold text-white">Studio Mechanical Keyboard</p>
              <p className="text-slate-400 text-[11px]">Qty: 1 • Tactile Switches</p>
            </div>
            <span className="font-mono font-bold">$149.00</span>
          </div>
          <div className="flex justify-between items-center pb-3 border-b border-slate-800/60">
            <div>
              <p className="font-bold text-white">Ergonomic Desk Mat Pro</p>
              <p className="text-slate-400 text-[11px]">Qty: 1 • Slate Black</p>
            </div>
            <span className="font-mono font-bold">$39.00</span>
          </div>
        </div>
        <div className="space-y-2 pt-2 border-t border-slate-800 text-xs">
          <div className="flex justify-between text-slate-400">
            <span>Subtotal</span>
            <span>{props.subtotal}</span>
          </div>
          <div className="flex justify-between text-slate-400">
            <span>Shipping</span>
            <span>{props.shipping}</span>
          </div>
          <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-slate-800">
            <span>Total</span>
            <span className="text-blue-400">{props.total}</span>
          </div>
        </div>
        <button type="button" className="w-full py-3 rounded-xl bg-blue-600 font-bold text-xs text-white hover:bg-blue-500 shadow-lg">
          Proceed to Checkout
        </button>
      </div>
    </section>
  ),
};

// 3. Complete Checkout Summary
export const EcommerceCheckoutSummaryBlock: BlockDefinition = {
  type: 'ecommerce-checkout-summary',
  name: 'Complete Checkout Summary',
  category: 'ecommerce',
  description: 'Two-column checkout view with billing information inputs and order summary.',
  iconName: 'CreditCard',
  defaultProps: {
    title: 'Secure Express Checkout',
  },
  fields: {
    title: { type: 'text', label: 'Title' },
  },
  render: ({ props }: BlockRenderProps) => (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">{props.title}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 text-xs">
            <h3 className="font-bold text-sm text-slate-200">1. Customer & Shipping Info</h3>
            <input type="text" placeholder="Full Name" className="w-full p-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white" />
            <input type="email" placeholder="Email Address" className="w-full p-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white" />
            <input type="text" placeholder="Delivery Street Address" className="w-full p-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white" />
            <div className="grid grid-cols-2 gap-3">
              <input type="text" placeholder="City" className="w-full p-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white" />
              <input type="text" placeholder="Postal Code" className="w-full p-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white" />
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 text-xs">
            <h3 className="font-bold text-sm text-slate-200">2. Payment Verification (Stripe Test)</h3>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-700 font-mono text-[11px] text-slate-300">
              CARD: 4242 •••• •••• 4242 [TEST MODE]
            </div>
            <button type="button" className="w-full py-3 rounded-xl bg-emerald-600 font-bold text-xs text-white hover:bg-emerald-500 shadow">
              Pay $188.00 Now
            </button>
          </div>
        </div>
      </div>
    </section>
  ),
};

// 4. Interactive Booking Calendar
export const BookingCalendarBlock: BlockDefinition = {
  type: 'booking-calendar',
  name: 'Appointment Booking Scheduler',
  category: 'ecommerce',
  description: 'Interactive date and time slot appointment selector.',
  iconName: 'Calendar',
  defaultProps: {
    title: 'Schedule an Architecture Consultation',
    duration: '45-Minute Technical Deep Dive',
  },
  fields: {
    title: { type: 'text', label: 'Title' },
  },
  render: ({ props }: BlockRenderProps) => {
    const [selectedSlot, setSelectedSlot] = useState('10:00 AM');
    const slots = ['09:00 AM', '10:00 AM', '11:30 AM', '02:00 PM', '03:30 PM', '04:45 PM'];

    return (
      <section className="py-20 bg-slate-950 text-white">
        <div className="max-w-3xl mx-auto px-4 p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="text-xl font-bold">{props.title}</h3>
            <p className="text-xs text-blue-400 mt-1">{props.duration}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 text-xs">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <span className="font-bold text-slate-300">Selected Date: Tomorrow</span>
              <div className="grid grid-cols-7 gap-1 text-center font-mono text-[10px] text-slate-400 pt-2">
                <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                {[...Array(28)].map((_, i) => (
                  <span key={i} className={`p-1.5 rounded ${i === 14 ? 'bg-blue-600 text-white font-bold' : 'hover:bg-slate-800'}`}>
                    {i + 1}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <span className="font-bold text-slate-300">Available Time Slots</span>
              <div className="grid grid-cols-2 gap-2">
                {slots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedSlot(slot)}
                    className={`py-2 rounded-lg text-xs font-semibold border transition-colors ${
                      selectedSlot === slot ? 'bg-blue-600 border-blue-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-300'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <button type="button" className="w-full py-3 rounded-xl bg-blue-600 text-xs font-bold text-white hover:bg-blue-500 shadow">
            Confirm Booking for {selectedSlot}
          </button>
        </div>
      </section>
    );
  },
};

// 5. Admin Data Table
export const AdminDataTableBlock: BlockDefinition = {
  type: 'admin-data-table',
  name: 'Paginated Database Table',
  category: 'admin',
  description: 'Data grid connected to project schema with search, filtering, and row actions.',
  iconName: 'Database',
  defaultProps: {
    tableName: 'users',
    records: [
      { id: 'usr-101', name: 'Sarah Jenkins', email: 'sarah@veloce.io', role: 'admin', status: 'Active' },
      { id: 'usr-102', name: 'Marcus Chen', email: 'marcus@dataflow.dev', role: 'editor', status: 'Active' },
      { id: 'usr-103', name: 'Elena Rostova', email: 'elena@alpine.org', role: 'member', status: 'Invited' },
      { id: 'usr-104', name: 'Alex Rivera', email: 'alex@quickpay.io', role: 'customer', status: 'Active' },
    ],
  },
  fields: {
    tableName: { type: 'text', label: 'Bound Table Name' },
  },
  render: ({ props }: BlockRenderProps) => {
    const [searchTerm, setSearchTerm] = useState('');
    const records = (props.records || []).filter((r: any) =>
      r.name.toLowerCase().includes(searchTerm.toLowerCase()) || r.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <section className="py-12 bg-slate-900 border-y border-slate-800 text-white">
        <div className="max-w-6xl mx-auto px-4 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold flex items-center gap-2">
                <span>Table:</span>
                <span className="font-mono text-blue-400">public.{props.tableName}</span>
              </h3>
              <p className="text-xs text-slate-400">Live Postgres Data Grid with Row Level Security</p>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-64">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search records..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg bg-slate-950 border border-slate-700 text-white focus:outline-none"
                />
              </div>
              <button type="button" className="px-3 py-1.5 text-xs font-bold rounded-lg bg-blue-600 text-white flex items-center gap-1">
                <Plus className="w-3.5 h-3.5" /> New Row
              </button>
            </div>
          </div>
          <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900/80 text-slate-400 font-mono border-b border-slate-800">
                <tr>
                  <th className="p-3">ID</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Role</th>
                  <th className="p-3">Status</th>
                  <th className="p-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {records.map((r: any) => (
                  <tr key={r.id} className="hover:bg-slate-900/40">
                    <td className="p-3 font-mono text-[11px] text-slate-400">{r.id}</td>
                    <td className="p-3 font-bold text-white">{r.name}</td>
                    <td className="p-3 text-slate-300">{r.email}</td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/20 text-blue-300 border border-blue-500/30">
                        {r.role}
                      </span>
                    </td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/20 text-emerald-300">
                        {r.status}
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <button type="button" className="text-slate-400 hover:text-red-400 text-xs">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  },
};

// 6. Admin Analytics KPI
export const AdminAnalyticsKpiBlock: BlockDefinition = {
  type: 'admin-analytics-kpi',
  name: 'Executive Analytics KPI Panel',
  category: 'admin',
  description: 'Dashboard metrics overview featuring total revenue, active sessions, and conversion rate.',
  iconName: 'LineChart',
  defaultProps: {
    kpis: [
      { label: 'Monthly Recurring Revenue', value: '$48,250', change: '+12.5%' },
      { label: 'Active API Requests', value: '1.42M', change: '+8.1%' },
      { label: 'Database Storage Used', value: '4.2 GB / 20 GB', change: 'Normal' },
      { label: 'Conversion Rate', value: '3.82%', change: '+0.4%' },
    ],
  },
  fields: {},
  render: ({ props }: BlockRenderProps) => (
    <section className="py-12 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {(props.kpis || []).map((k: any, i: number) => (
          <div key={i} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
            <span className="text-xs text-slate-400 font-medium">{k.label}</span>
            <div className="text-2xl font-black text-white">{k.value}</div>
            <span className="text-[11px] text-emerald-400 font-bold">{k.change}</span>
          </div>
        ))}
      </div>
    </section>
  ),
};

// 7. Admin Profile Form
export const AdminProfileFormBlock: BlockDefinition = {
  type: 'admin-profile-form',
  name: 'User Profile & Security Settings',
  category: 'admin',
  description: 'User settings form with profile avatar, email update, password reset, and session management.',
  iconName: 'User',
  defaultProps: {
    title: 'Account & Security Preferences',
  },
  fields: {
    title: { type: 'text', label: 'Title' },
  },
  render: ({ props }: BlockRenderProps) => (
    <section className="py-16 bg-slate-900 text-white">
      <div className="max-w-2xl mx-auto px-4 p-8 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl space-y-6 text-xs">
        <h3 className="text-lg font-bold border-b border-slate-800 pb-4">{props.title}</h3>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold">JD</div>
          <div>
            <h4 className="text-sm font-bold text-white">Jane Developer</h4>
            <p className="text-slate-400">Owner • San Francisco, CA</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-slate-400">Display Name</label>
            <input type="text" defaultValue="Jane Developer" className="w-full p-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white" />
          </div>
          <div className="space-y-1">
            <label className="text-slate-400">Email Address</label>
            <input type="email" defaultValue="jane@example.com" className="w-full p-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white" />
          </div>
        </div>
        <button type="button" className="px-5 py-2.5 rounded-lg bg-blue-600 font-bold text-white hover:bg-blue-500 shadow">
          Save Account Changes
        </button>
      </div>
    </section>
  ),
};

// 8. Auto-CRUD Generator Block
export const AdminCrudGeneratorBlock: BlockDefinition = {
  type: 'admin-crud-generator',
  name: 'Full CRUD Flow Generator',
  category: 'admin',
  description: 'Generated CRUD module allowing instant insert, list, update, and delete on any registered table.',
  iconName: 'Layers',
  defaultProps: {
    entityTitle: 'Customer Orders',
    boundTable: 'orders',
  },
  fields: {
    entityTitle: { type: 'text', label: 'Entity Display Title' },
    boundTable: { type: 'text', label: 'Target Database Table' },
  },
  render: ({ props }: BlockRenderProps) => (
    <section className="py-12 bg-slate-950 border-y border-slate-800 text-white">
      <div className="max-w-5xl mx-auto px-4 p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="font-bold text-base">{props.entityTitle} Module</h4>
            <span className="text-[10px] font-mono text-emerald-400">Auto-Generated REST Handler: /api/{props.boundTable}</span>
          </div>
          <span className="px-2 py-1 rounded bg-blue-500/20 text-blue-300 text-xs font-semibold">RLS Enforced</span>
        </div>
        <p className="text-xs text-slate-400 leading-relaxed">
          This CRUD interface connects to your backend data adapter. When running on Target A, it triggers Supabase client queries. When compiled to Target B, it dispatches to the PHP PDO REST router.
        </p>
      </div>
    </section>
  ),
};

export const ecommerceAndAdminBlocks = [
  EcommerceProductGridBlock,
  EcommerceCartDrawerBlock,
  EcommerceCheckoutSummaryBlock,
  BookingCalendarBlock,
  AdminDataTableBlock,
  AdminAnalyticsKpiBlock,
  AdminProfileFormBlock,
  AdminCrudGeneratorBlock,
];

-- ================================================================================
-- MIGRATION 003: ERP ENTERPRISE BUSINESS SUITE SCHEMA
-- ================================================================================

-- Organizations (Tenants)
CREATE TABLE IF NOT EXISTS public.organizations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL DEFAULT 'Falcon LLP',
    slug TEXT NOT NULL UNIQUE DEFAULT 'falcon-llp',
    currency TEXT NOT NULL DEFAULT 'USD',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Leads
CREATE TABLE IF NOT EXISTS public.erp_leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
    code TEXT NOT NULL,
    name TEXT NOT NULL,
    company_name TEXT,
    email TEXT,
    phone TEXT,
    status TEXT DEFAULT 'New' CHECK (status IN ('New', 'Contacted', 'Qualified', 'Lost', 'Converted')),
    source TEXT DEFAULT 'Website',
    value NUMERIC(12, 2) DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Deals
CREATE TABLE IF NOT EXISTS public.erp_deals (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
    code TEXT NOT NULL,
    name TEXT NOT NULL,
    company_name TEXT,
    stage TEXT DEFAULT 'Qualify To Buy' CHECK (stage IN ('Qualify To Buy', 'Contact Made', 'Presentation', 'Proposal Made', 'Appointment', 'Won', 'Lost')),
    probability INT DEFAULT 20,
    deal_value NUMERIC(14, 2) DEFAULT 0,
    priority TEXT DEFAULT 'Medium' CHECK (priority IN ('Low', 'Medium', 'High')),
    due_date DATE,
    follow_up_date DATE,
    tags TEXT[] DEFAULT '{}',
    owners TEXT[] DEFAULT '{}',
    contacts TEXT[] DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Deal Activities
CREATE TABLE IF NOT EXISTS public.erp_deal_activities (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    deal_id UUID NOT NULL REFERENCES public.erp_deals(id) ON DELETE CASCADE,
    type TEXT DEFAULT 'activity' CHECK (type IN ('activity', 'meeting', 'call', 'note', 'task', 'file', 'email')),
    title TEXT NOT NULL,
    description TEXT,
    date_group TEXT DEFAULT 'Today',
    priority TEXT DEFAULT 'Normal',
    reminder TEXT,
    assigned_to TEXT,
    user_name TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Products & Stock
CREATE TABLE IF NOT EXISTS public.erp_products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
    code TEXT NOT NULL,
    name TEXT NOT NULL,
    sku TEXT,
    category TEXT,
    quantity INT DEFAULT 0,
    selling_price NUMERIC(10, 2) DEFAULT 0,
    purchase_price NUMERIC(10, 2) DEFAULT 0,
    reorder_level INT DEFAULT 10,
    status TEXT DEFAULT 'In Stock',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Immutable Stock Ledger Entries
CREATE TABLE IF NOT EXISTS public.erp_stock_ledger (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
    product_id UUID NOT NULL REFERENCES public.erp_products(id) ON DELETE CASCADE,
    voucher_type TEXT NOT NULL,
    qty_change INT NOT NULL,
    balance_after INT NOT NULL,
    remarks TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Invoices & Payments
CREATE TABLE IF NOT EXISTS public.erp_invoices (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
    invoice_number TEXT NOT NULL,
    customer_name TEXT NOT NULL,
    invoice_date DATE DEFAULT CURRENT_DATE,
    total_amount NUMERIC(12, 2) DEFAULT 0,
    paid_amount NUMERIC(12, 2) DEFAULT 0,
    status TEXT DEFAULT 'Pending' CHECK (status IN ('Pending', 'Paid', 'Partially Paid', 'Cancelled')),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Double-Entry General Ledger (Debit == Credit)
CREATE TABLE IF NOT EXISTS public.erp_gl_entries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
    posting_date DATE DEFAULT CURRENT_DATE,
    account_code TEXT NOT NULL,
    account_name TEXT NOT NULL,
    debit NUMERIC(12, 2) DEFAULT 0,
    credit NUMERIC(12, 2) DEFAULT 0,
    voucher_type TEXT NOT NULL,
    voucher_id UUID,
    remarks TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Employees & HR
CREATE TABLE IF NOT EXISTS public.erp_employees (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
    employee_code TEXT NOT NULL,
    full_name TEXT NOT NULL,
    email TEXT,
    department TEXT,
    position TEXT,
    salary NUMERIC(10, 2) DEFAULT 0,
    leave_balance INT DEFAULT 20,
    status TEXT DEFAULT 'Active',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Projects
CREATE TABLE IF NOT EXISTS public.erp_projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
    code TEXT NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    progress INT DEFAULT 0 CHECK (progress BETWEEN 0 AND 100),
    team_leader TEXT,
    deadline DATE,
    status TEXT DEFAULT 'In Progress',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Support Tickets
CREATE TABLE IF NOT EXISTS public.erp_tickets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
    code TEXT NOT NULL,
    customer_name TEXT NOT NULL,
    subject TEXT NOT NULL,
    priority TEXT DEFAULT 'Medium' CHECK (priority IN ('Low', 'Medium', 'High')),
    status TEXT DEFAULT 'Open' CHECK (status IN ('Open', 'Pending', 'Resolved', 'Closed')),
    assigned_to TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS
ALTER TABLE public.organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.erp_leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.erp_deals ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.erp_deal_activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.erp_products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.erp_stock_ledger ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.erp_invoices ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.erp_gl_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.erp_employees ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.erp_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.erp_tickets ENABLE ROW LEVEL SECURITY;

-- Allow authenticated users and anonymous demo access
CREATE POLICY "Allow public demo access to organizations" ON public.organizations FOR ALL USING (true);
CREATE POLICY "Allow public demo access to erp_leads" ON public.erp_leads FOR ALL USING (true);
CREATE POLICY "Allow public demo access to erp_deals" ON public.erp_deals FOR ALL USING (true);
CREATE POLICY "Allow public demo access to erp_deal_activities" ON public.erp_deal_activities FOR ALL USING (true);
CREATE POLICY "Allow public demo access to erp_products" ON public.erp_products FOR ALL USING (true);
CREATE POLICY "Allow public demo access to erp_stock_ledger" ON public.erp_stock_ledger FOR ALL USING (true);
CREATE POLICY "Allow public demo access to erp_invoices" ON public.erp_invoices FOR ALL USING (true);
CREATE POLICY "Allow public demo access to erp_gl_entries" ON public.erp_gl_entries FOR ALL USING (true);
CREATE POLICY "Allow public demo access to erp_employees" ON public.erp_employees FOR ALL USING (true);
CREATE POLICY "Allow public demo access to erp_projects" ON public.erp_projects FOR ALL USING (true);
CREATE POLICY "Allow public demo access to erp_tickets" ON public.erp_tickets FOR ALL USING (true);

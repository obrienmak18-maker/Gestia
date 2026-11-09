'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import { CheckCircle2, Loader2, Send, TriangleAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { supabase } from '@/lib/supabase';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const EMPTY_FORM = { name: '', email: '', phone: '', company: '', message: '' };

export function ContactForm() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState<FormStatus>('idle');

  const updateField = (field: keyof typeof EMPTY_FORM) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((current) => ({ ...current, [field]: event.target.value }));

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');

    const { error } = await supabase.from('contact_messages').insert({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim() || null,
      company: form.company.trim() || null,
      message: form.message.trim(),
    });

    if (error) {
      setStatus('error');
      return;
    }

    setForm(EMPTY_FORM);
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <div className="animate-fade-up flex flex-col items-center py-10 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand">
          <CheckCircle2 className="h-8 w-8" aria-hidden />
        </span>
        <h3 className="mt-6 text-2xl font-bold text-slate-900">Message bien reçu</h3>
        <p className="mt-3 max-w-sm text-base leading-relaxed text-slate-600">
          Merci pour votre message. Notre équipe vous répondra dans les meilleurs délais.
        </p>
        <Button
          type="button"
          variant="outline"
          onClick={() => setStatus('idle')}
          className="mt-8 h-11 rounded-full px-6"
        >
          Envoyer un autre message
        </Button>
      </div>
    );
  }

  const isSubmitting = status === 'submitting';

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <div className="space-y-2">
        <Label htmlFor="contact-name">Nom complet *</Label>
        <Input id="contact-name" name="name" required maxLength={120} value={form.name} onChange={updateField('name')} autoComplete="name" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-email">Adresse e-mail *</Label>
        <Input id="contact-email" name="email" type="email" required maxLength={254} value={form.email} onChange={updateField('email')} autoComplete="email" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-phone">Téléphone</Label>
        <Input id="contact-phone" name="phone" type="tel" maxLength={30} value={form.phone} onChange={updateField('phone')} autoComplete="tel" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-company">Entreprise ou cabinet</Label>
        <Input id="contact-company" name="company" maxLength={160} value={form.company} onChange={updateField('company')} autoComplete="organization" />
      </div>
      <div className="space-y-2 sm:col-span-2">
        <Label htmlFor="contact-message">Votre message *</Label>
        <Textarea id="contact-message" name="message" required maxLength={2000} rows={5} value={form.message} onChange={updateField('message')} placeholder="Dites-nous quel logiciel vous intéresse et combien de postes vous utilisez." />
      </div>

      {status === 'error' && (
        <p role="alert" className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800 sm:col-span-2">
          <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
          Votre message n'a pas pu être envoyé. Réessayez dans un instant ou écrivez-nous directement sur WhatsApp.
        </p>
      )}

      <div className="sm:col-span-2">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-12 w-full rounded-full bg-brand text-base font-semibold text-white shadow-md shadow-brand/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-lg sm:w-auto sm:px-10"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              Envoi en cours
            </>
          ) : (
            <>
              <Send className="h-4 w-4" aria-hidden />
              Envoyer le message
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

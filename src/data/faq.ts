import { FaqItem } from "@/types";

export const HOME_FAQ: FaqItem[] = [
  {
    id: "faq-1",
    question: "Les logiciels sont-ils 100% conformes à la Loi de Finances marocaine et à la DGI ?",
    answer: "Oui, sans exception. Tous nos progiciels (Pack JBS, Sage ECF V19.10, Pack Sage 100, Sage X3) intègrent le plan comptable général marocain normalisé (CGNC), les barèmes d'IR révisés, la gestion des taux de TVA et l'exportation XML certifiée conforme pour les plateformes SIMPL-IS, SIMPL-TVA et la télédéclaration annuelle des salaires (État 9421 EDI).",
    category: "Fiscalité Marocaine",
  },
  {
    id: "faq-2",
    question: "Comment se déroule la livraison après confirmation de la commande ?",
    answer: "La livraison est ultra-rapide. Dans les 10 à 15 minutes suivant la confirmation de votre commande sur WhatsApp, vous recevez un lien d'accès sécurisé (Google Drive haute vitesse) contenant les fichiers d'installation complets, la clé d'activation permanente, la documentation PDF illustrée et la vidéo tutoriel pas-à-pas.",
    category: "Commande",
  },
  {
    id: "faq-3",
    question: "Proposez-vous une assistance pour l'installation sur nos ordinateurs ?",
    answer: "Absolument. Chaque commande inclut sans supplément un accompagnement d'installation complet. Si vous préférez qu'un spécialiste s'en charge, nos ingénieurs se connectent en direct à distance (via AnyDesk ou TeamViewer) pour installer, paramétrer et tester le logiciel sur votre machine ou réseau d'entreprise.",
    category: "Installation",
  },
  {
    id: "faq-4",
    question: "Puis-je installer le logiciel sur plusieurs postes au sein de mon entreprise ?",
    answer: "Oui. Nos licences sont ouvertes en multiposte pour une utilisation au sein de votre structure ou cabinet, sans limitation artificielle du nombre de machines ni obligation de payer des postes additionnels à prix d'or.",
    category: "Licence",
  },
  {
    id: "faq-5",
    question: "Quels sont les modes de paiement acceptés au Maroc ?",
    answer: "Nous acceptons les modes de règlement professionnels les plus répandus et sécurisés au Maroc : Virement bancaire direct (Attijariwafa Bank, BCP, Bank of Africa, CIH Bank, CDM, Crédit Agricole), versement d'espèces en agence bancaire, ou transfert d'argent instantané (Wafacash, Cash Plus, Barid Cash). Une facture avec ICE, IF et RC vous est remise immédiatement.",
    category: "Commande",
  },
];

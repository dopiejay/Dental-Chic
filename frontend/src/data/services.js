import {
  StethoscopeIcon,
  SparklesIcon,
  SyringeIcon,
  WrenchIcon,
  BabyIcon,
  ScanLineIcon,
} from '../components/Icons';

export const services = [
  {
    slug: 'general-dentistry',
    icon: StethoscopeIcon,
    title: 'General Dentistry',
    desc: 'Routine dental care and preventive treatment — check-ups, cleanings, and fillings that keep small problems from becoming big ones.',
    color: 'from-chic-teal/20 to-chic-green/10',
    iconColor: 'text-chic-teal bg-chic-teal/10',
    img: '/images/general.jpg',
    intro:
      'General dentistry focuses on the prevention, diagnosis, and treatment of common dental conditions. Regular visits keep your teeth and gums healthy and catch small problems before they grow into bigger, more expensive ones.',
    includes: [
      { title: 'Dental Examinations', desc: 'A full look at your teeth, gums, and oral health.' },
      { title: 'Teeth Cleaning & Scaling', desc: 'Removal of plaque and tartar that brushing cannot reach.' },
      { title: 'Fillings', desc: 'Repairs for cavities and damaged teeth.' },
      { title: 'Gum Care', desc: 'Treatment and guidance for healthy, stable gums.' },
      { title: 'Routine Check-ups', desc: 'Regular reviews that keep small issues from escalating.' },
    ],
    whoFor:
      'General dental care is suitable for children, teenagers, and adults — whether you are due for a routine check-up, want preventive care, or have a specific concern such as a toothache or sensitivity.',
    steps: [
      { title: 'Consultation', desc: 'We listen to your concerns and examine your oral health.' },
      { title: 'Assessment', desc: 'Any necessary examinations or imaging are carried out on site.' },
      { title: 'Treatment Plan', desc: 'The team explains what was found and recommends treatment.' },
      { title: 'Care & Follow-Up', desc: 'Treatment is provided gently, with follow-up where needed.' },
    ],
    whyUs: [
      { title: 'Gentle Approach', desc: 'Minimally invasive technique designed around your comfort.' },
      { title: 'Modern Equipment', desc: 'Digital X-ray and current materials for accurate, efficient visits.' },
      { title: 'Experienced Team', desc: 'A full clinical team led by our founder, Dr. Shabana Yusuf.' },
    ],
    faqs: [
      {
        q: 'How often should I have a dental check-up?',
        a: 'Many patients benefit from a check-up every six months, but the right interval depends on your individual oral health. We will recommend a schedule that suits you.',
      },
      {
        q: 'Does treatment hurt?',
        a: 'We use gentle, minimally invasive techniques and always make sure you are comfortable before any treatment begins.',
      },
      {
        q: 'How much does it cost?',
        a: 'Costs depend on the treatment you actually need, which we can only confirm after an assessment. You will receive clear pricing before anything begins.',
      },
    ],
  },
  {
    slug: 'cosmetic-dentistry',
    icon: SparklesIcon,
    title: 'Cosmetic Dentistry',
    desc: 'Enhance the appearance of your smile with veneers, whitening, and full smile makeovers — a clinic specialty led by Dr. Yusuf.',
    color: 'from-amber-100/60 to-orange-50/40',
    iconColor: 'text-amber-600 bg-amber-100/60',
    img: '/images/cosmetic.jpg',
    intro:
      'Cosmetic dentistry enhances how your smile looks — the colour, shape, symmetry, and overall appearance of your teeth. It is a Dental Chic specialty led by Dr. Yusuf, combining an artistic eye with minimally invasive technique.',
    includes: [
      { title: 'Teeth Whitening', desc: 'Safe, supervised brightening of discoloured teeth.' },
      { title: 'Dental Veneers', desc: 'Thin, custom-made shells that transform shape and shade.' },
      { title: 'Full Smile Makeovers', desc: 'A combined plan tailored to your facial features and goals.' },
      { title: 'Aesthetic Restorations', desc: 'Tooth-coloured repairs that blend in seamlessly.' },
    ],
    whoFor:
      'Cosmetic dentistry suits anyone who feels self-conscious about the colour, shape, spacing, or condition of their visible teeth — whether the concern is minor or a complete makeover is desired.',
    steps: [
      { title: 'Consultation & Goals', desc: 'We discuss what you would like to change about your smile.' },
      { title: 'Smile Assessment', desc: 'Your teeth, bite, and facial features are evaluated together.' },
      { title: 'Treatment Plan', desc: 'Options, sequence, and expected outcomes are explained clearly.' },
      { title: 'Your New Smile', desc: 'Treatment is completed and reviewed until you are happy.' },
    ],
    whyUs: [
      { title: 'Clinic Specialty', desc: 'A core focus of the practice, led by our founder Dr. Shabana Yusuf.' },
      { title: 'Natural-Looking Results', desc: 'Enhancements designed to suit you — not a one-size-fits-all smile.' },
      { title: 'Quality Materials', desc: 'Modern ceramics and materials chosen for beauty and durability.' },
    ],
    faqs: [
      {
        q: 'Is teeth whitening safe?',
        a: 'When carried out under professional supervision, whitening is a safe and well-established procedure. We assess your teeth and gums first to make sure it is appropriate for you.',
      },
      {
        q: 'Will my smile look natural?',
        a: 'Yes. Every restoration and shade is matched to your features, and nothing is done without agreeing on the look you want first.',
      },
      {
        q: 'How long do results last?',
        a: 'It depends on the treatment and your habits such as diet and hygiene. We will give you realistic expectations and aftercare advice during your consultation.',
      },
    ],
  },
  {
    slug: 'orthodontics',
    icon: SyringeIcon,
    title: 'Orthodontics',
    desc: 'Straighter teeth and improved alignment with fixed and aligner braces, for children and adults, tracked visit by visit.',
    color: 'from-blue-100/60 to-sky-50/40',
    iconColor: 'text-blue-600 bg-blue-100/60',
    img: '/images/orthodontics.jpg',
    intro:
      'Orthodontics straightens teeth and improves how your upper and lower teeth meet. Treatment at Dental Chic uses fixed braces or aligners, planned carefully and tracked visit by visit.',
    includes: [
      { title: 'Fixed Braces', desc: 'Reliable, precise correction for a wide range of alignment issues.' },
      { title: 'Aligner Braces', desc: 'A more discreet option for suitable cases.' },
      { title: 'Retainers', desc: 'Keeping teeth in their new positions after treatment.' },
      { title: 'Ongoing Monitoring', desc: 'Regular adjustments and progress reviews throughout treatment.' },
    ],
    whoFor:
      'Orthodontic treatment is available for children, teenagers, and adults dealing with crowded, spaced, or misaligned teeth, or bite concerns that affect comfort and function.',
    steps: [
      { title: 'Consultation', desc: 'We discuss your concerns and what you would like to achieve.' },
      { title: 'Assessment & Imaging', desc: 'Records and on-site digital X-ray inform the diagnosis.' },
      { title: 'Treatment Planning', desc: 'The approach, timeline estimate, and options are explained.' },
      { title: 'Fitting', desc: 'Your braces or aligners are fitted comfortably.' },
      { title: 'Adjustments', desc: 'Short regular visits keep treatment moving as planned.' },
      { title: 'Retention & Review', desc: 'Retainers and reviews protect your result long term.' },
    ],
    whyUs: [
      { title: 'All Ages Welcome', desc: 'Children, teenagers, and adult patients are all treated here.' },
      { title: 'Visit-by-Visit Tracking', desc: 'Progress is monitored closely so plans stay on course.' },
      { title: 'On-Site Digital X-Ray', desc: 'Imaging happens right here — no separate referral needed.' },
    ],
    faqs: [
      {
        q: 'Am I too old for braces?',
        a: 'No. Teeth can be moved safely at any age, and many of our orthodontic patients are adults. An assessment will confirm the best option for your case.',
      },
      {
        q: 'How long does treatment take?',
        a: 'It varies from case to case depending on what needs correcting. After your assessment we will give you an estimated timeline before anything begins.',
      },
      {
        q: 'Do braces hurt?',
        a: 'Most patients feel mild soreness for a few days after fitting and adjustments. It settles quickly, and we will show you how to stay comfortable.',
      },
    ],
  },
  {
    slug: 'crowns-and-bridges',
    icon: WrenchIcon,
    title: 'Crowns & Bridges',
    desc: 'Zirconia and E-max restorations built to match your natural bite and shade.',
    color: 'from-purple-100/60 to-pink-50/40',
    iconColor: 'text-purple-600 bg-purple-100/60',
    img: '/images/crowns-bridges.jpg',
    intro:
      'Crowns restore and protect teeth that are damaged, weakened, or heavily filled, while bridges replace missing teeth by anchoring to neighbouring ones. At Dental Chic they are crafted from quality materials such as zirconia and E-max, shaped to match your natural bite and shade.',
    whoFor:
      'Crowns and bridges suit patients with cracked, root-treated, or heavily filled teeth, as well as those missing one or more teeth who prefer a fixed solution over removable options.',
  },
  {
    slug: 'childrens-dentistry',
    icon: BabyIcon,
    title: "Children's Dentistry",
    desc: 'Gentle care designed for younger patients in a comfortable environment.',
    color: 'from-pink-100/60 to-rose-50/40',
    iconColor: 'text-pink-600 bg-pink-100/60',
    img: '/images/child.jpg',
    intro:
      "Children's dentistry gives young patients a calm, friendly start with dental care — routine check-ups, cleanings, and early treatment delivered gently, so visits feel normal rather than scary.",
    whoFor:
      'Children of all ages, from toddlers attending a first visit to teenagers needing ongoing care. Parents are welcome to stay with their child throughout.',
  },
  {
    slug: 'digital-x-ray',
    icon: ScanLineIcon,
    title: 'Digital X-Ray',
    desc: 'Modern, on-site diagnostic imaging for faster and more accurate diagnosis.',
    color: 'from-emerald-100/60 to-teal-50/40',
    iconColor: 'text-emerald-600 bg-emerald-100/60',
    img: '/images/xray.jpg',
    intro:
      'Digital X-ray provides detailed images of your teeth, roots, and jaw within seconds — right here at the clinic. It supports faster, more accurate diagnosis, meaning treatment planning is based on what is actually happening below the surface.',
    whoFor:
      'Any patient whose assessment calls for imaging — from suspected cavities and root concerns to orthodontic planning. No separate referral or trip elsewhere is needed.',
  },
];

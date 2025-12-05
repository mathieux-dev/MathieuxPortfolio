export interface WritingItem {
  readonly id: string;
  readonly year: string;
  readonly title: string;
  readonly titleSuffix: string;
  readonly url: string;
  readonly ariaLabel: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
}

export const writingData: WritingItem[] = [
  {
    id: 'accessibility-pitfalls',
    year: '2024',
    title: '5 Common Accessibility Pitfalls and How to Avoid',
    titleSuffix: 'Them',
    url: "https://klaviyo.tech/5-common-accessibility-pitfalls-and-how-to-avoid-them-e316dfc55ff0",
    ariaLabel: '5 Common Accessibility Pitfalls and How to Avoid Them (opens in a new tab)',
    imageSrc: "https://c.animaapp.com/mfeedx8tJMhHh4/assets/12.png",
    imageAlt: 'Accessibility icon'
  },
  {
    id: 'algolia-wordpress',
    year: '2020',
    title: 'Integrating Algolia Search with WordPress',
    titleSuffix: 'Multisite',
    url: "https://upstatement.com/blog/integrating-algolia-search-with-wordpress-multisite/",
    ariaLabel: 'Integrating Algolia Search with WordPress Multisite (opens in a new tab)',
    imageSrc: "https://c.animaapp.com/mfeedx8tJMhHh4/assets/13.jpg",
    imageAlt: 'Telescope'
  },
  {
    id: 'headless-cms',
    year: '2019',
    title: 'Building a Headless Mobile App CMS From',
    titleSuffix: 'Scratch',
    url: "https://upstatement.com/blog/building-a-headless-mobile-app-cms-from-scratch/",
    ariaLabel: 'Building a Headless Mobile App CMS From Scratch (opens in a new tab)',
    imageSrc: "https://c.animaapp.com/mfeedx8tJMhHh4/assets/11.jpg",
    imageAlt: 'Headless horseman'
  }
] as const;

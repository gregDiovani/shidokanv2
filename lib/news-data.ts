export interface NewsArticle {
  id: string
  category: string
  title: string
  excerpt: string
  date: string
  image: string
  content: string[]
}

export const newsArticles: NewsArticle[] = [
  {
    id: 'regional-tournament-results',
    category: 'Competition',
    title: 'Shidokan Sweeps Regional Tournament with Five Gold Medals',
    excerpt:
      "Our competitors dominated the mat at this year's Regional Open, bringing home five gold medals across four divisions and setting a new dojo record.",
    date: 'June 28, 2026',
    image: '/images/news-tournament.png',
    content: [
      'The 2026 Regional Open Championship was held on June 22nd at the Metro Sports Complex, and Shidokan students represented the dojo with an outstanding performance across the board.',
      'Competing against over 300 athletes from 24 clubs in the region, our fighters brought home five gold medals, three silvers, and two bronzes — the most hardware this dojo has ever captured at a single regional event.',
      'The gold medals were earned by Marcus Chen (Lion Division, -60kg), Sarah O\'Brien (Adult Female, Open Weight), Daniel Park (Lion Division, +70kg), Ryan Torres (Adult Male, -75kg), and the Demo Team, which swept the synchronized kata competition.',
      'Head instructor Shihan Haruki praised the entire team: "This result reflects months of preparation and genuine commitment. But more than the medals — I am proud of how every one of our athletes conducted themselves. Win or lose, they represented Shidokan with honor."',
      'The next major competition on the calendar is the National Championships in September. Interested athletes should speak with their instructor about the training camp that begins in July.',
    ],
  },
  {
    id: 'summer-intensive-program',
    category: 'Training',
    title: 'Summer Intensive Training Camp Now Open for Registration',
    excerpt:
      'The annual Summer Intensive is back. Two weeks of morning sessions, technical seminars, and conditioning designed to fast-track your development.',
    date: 'June 15, 2026',
    image: '/images/news-training.png',
    content: [
      'Registration is now open for the 2026 Shidokan Summer Intensive Training Camp, scheduled for July 7–19.',
      'The two-week program runs Monday through Saturday and includes morning conditioning sessions (7:00–8:30 AM), technical seminars with Shihan Haruki and visiting instructors (9:00–11:00 AM), and open mat sessions in the afternoon.',
      'Topics covered during the intensive include advanced kata bunkai (applications), Muay Thai clinch work, takedown defense and entries, competition strategy, and mental preparation for martial arts.',
      'This program is open to Lion, Adult, and Kata students who hold a minimum rank of yellow belt. Space is limited to 30 participants to ensure quality instruction.',
      'The fee for the full two weeks is $350 per student. Registration closes July 1st or when the camp reaches capacity. Contact the front desk or email info@shidokan.com to secure your spot.',
    ],
  },
  {
    id: 'black-belt-grading-june',
    category: 'Grading',
    title: 'Three Students Earn Black Belt in June Grading Ceremony',
    excerpt:
      'After years of dedication, three of our students achieved the rank of Shodan in a rigorous three-hour grading session before a full panel of black belts.',
    date: 'June 3, 2026',
    image: '/images/news-grading.png',
    content: [
      'On June 1st, three Shidokan students faced the most challenging test of their martial arts careers — and passed.',
      'After years of training, Jessica Yamamoto (8 years), Michael Brown (11 years), and Aiden Walsh (6 years) successfully completed their Shodan (1st degree black belt) grading before a panel of five black belt examiners.',
      'The three-hour grading covered every element of the Shidokan system: classical kata performance, bunkai demonstration, Muay Thai techniques, controlled full-contact sparring, grappling, and a physical conditioning test.',
      'Shihan Haruki addressed the candidates at the conclusion of the ceremony: "A black belt is not a destination — it is the beginning of your real training. You have proven you can meet our standard. Now you will spend the rest of your life deepening your understanding of what that standard means."',
      'The next black belt grading will be held in November. Candidates must be nominated by their instructor and have met the required minimum training hours and competition participation.',
    ],
  },
  {
    id: 'dojo-expansion-announcement',
    category: 'Dojo News',
    title: 'Dojo Expansion: New Training Space Opens This Fall',
    excerpt:
      'We are expanding. A second training floor will open in September, adding dedicated space for grappling, weapons training, and additional class times.',
    date: 'May 20, 2026',
    image: '/images/about-dojo.png',
    content: [
      'After two years of planning, construction on the Shidokan expansion is complete. Our new second-floor training space will open officially on September 1st, 2026.',
      'The new space adds 2,400 square feet of dedicated training area, including a fully matted grappling room, a heavy bag wall with 12 heavy bags, a weapons storage and training area, and an observation gallery for parents.',
      'The expansion allows us to add new class times that have been requested for years — including an early morning Adult class (6:00–7:30 AM, Monday/Wednesday/Friday) and a dedicated weapons program beginning in October.',
      'Current students will receive first access to new class slots during pre-registration week, July 28–August 1. Contact the front desk for details on the new schedule.',
    ],
  },
  {
    id: 'youth-championship-preview',
    category: 'Competition',
    title: 'National Youth Championships: What to Expect This September',
    excerpt:
      'With the National Youth Championships two months away, here is what our competitors need to know about preparation, format, and registration.',
    date: 'May 8, 2026',
    image: '/images/news-tournament.png',
    content: [
      'The 2026 National Youth Shidokan Championships will be held September 13–14 in Chicago, IL. Our dojo will be sending its largest delegation in three years.',
      'The championship includes divisions for kata, kumite (sparring), and team events. Age divisions run from 8–10, 11–13, 14–17, and open youth (under 18). Weight categories vary by age division.',
      'Students wishing to compete must be nominated by their instructor, hold a minimum rank of orange belt, and have competed in at least one sanctioned event in the past 12 months.',
      'A competition prep training camp will run July 7–19 (see Summer Intensive). Students competing at Nationals are strongly encouraged to attend. Individual preparation sessions with Shihan Haruki can be scheduled through the front desk.',
      'Registration for Nationals closes August 1st. Entry fees are the responsibility of the student. The dojo covers instructor travel costs.',
    ],
  },
  {
    id: 'new-instructor-announcement',
    category: 'Dojo News',
    title: 'Welcome: Sensei Yuki Chen Joins the Shidokan Instructor Team',
    excerpt:
      'We are pleased to announce that Sensei Yuki Chen, a 3rd degree black belt and former national champion, has joined our teaching staff.',
    date: 'April 12, 2026',
    image: '/images/shihan-portrait.png',
    content: [
      'Shidokan is proud to welcome Sensei Yuki Chen to our instructor team. Sensei Chen will lead the Cubs and Pre-Lion programs and assist with the Lions program.',
      'A Shidokan practitioner for 17 years, Sensei Chen holds a 3rd degree black belt and is a two-time national champion in the kata division. She is also a certified children\'s physical education instructor and brings a unique combination of martial arts depth and youth teaching expertise.',
      '"I have been looking for a dojo with genuine standards and a real community," Sensei Chen said. "From my first visit here, I knew this was the right place. I am honored to be part of the Shidokan family."',
      'Sensei Chen\'s classes begin May 1st. Current Cubs and Pre-Lion parents will receive a separate communication with any schedule adjustments.',
    ],
  },
]

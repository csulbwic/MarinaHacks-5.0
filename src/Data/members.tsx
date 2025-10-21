/*
GROUP 1: Directors
GROUP 2: WiC Officers
GROUP 3: Website Committee
GROUP 4: Design Committee
GROUP 5: Sponsorship Committee
*/

export const members = [
  // ===== DIRECTORS (Group 1) =====
  { name: 'Citlally V.',   group: 1, role: 'MarinaHacks Co-Director', committeeType: 'director',  img: "Team_Photos/Citlally_V.JPG" },
  { name: 'Mometa U.',     group: 1, role: 'MarinaHacks Co-Director', committeeType: 'director',  img: 'Team_Photos/Mometa_Uddin.JPG' },

  // ===== OFFICERS (Group 2) =====
  { name: 'Daksha A.',     group: 2, role: 'President',        committeeType: 'officer',  img: '/Team_Photos/Daksha_Arvind.JPG' },
  { name: 'Citlally V.',   group: 2, role: 'Co-Vice President', committeeType: 'officer',  img: '/Team_Photos/Citlally_V.JPG' },
  { name: 'Mya B.',        group: 2, role: 'Co-Vice President', committeeType: 'officer',  img: '/Team_Photos/Mya_B.JPG' },
  { name: 'Julie T.',      group: 2, role: 'Co-Secretary',     committeeType: 'officer',  img: '/Team_Photos/Julie_T.JPG' },
  { name: 'Lilly N.',      group: 2, role: 'Co-Secretary',     committeeType: 'officer',  img: '/Team_Photos/LillyNguyen.JPG' },
  { name: 'Zarya A.',      group: 2, role: 'Co-Treasurer',     committeeType: 'officer',  img: '/Team_Photos/ZaryaAmin.jpeg' },
  { name: 'Shishira S.',   group: 2, role: 'Industry Chair',  committeeType: 'officer',  img: '/Team_Photos/ShishiraShashidhar.png' },
  { name: 'Stacy M.',      group: 2, role: 'Event Coordinator', committeeType: 'officer',  img: '/Team_Photos/StacyMazariego.jpeg' },
  { name: 'Christina P.',  group: 2, role: 'AESB Representative', committeeType: 'officer',  img: '/Team_Photos/Christina_Peralta.JPG' },
  { name: 'Anna G.',       group: 2, role: 'Webmaster',       committeeType: 'officer',  img: '/Team_Photos/Anna_Gelisanga.JPG' },
  { name: 'Tessa H.',      group: 2, role: 'Co-Social Media Coordinator', committeeType: 'officer',  img: '/Team_Photos/Tessa_Holder.jpg' },
  { name: 'Thrity G.',     group: 2, role: 'Co-Social Media Coordinator', committeeType: 'officer',  img: '/Team_Photos/Thrity_Golzari.JPG' },
  { name: 'Anita D.',      group: 2, role: 'Graphic Design Coordinator', committeeType: 'officer',  img: '/Team_Photos/Anita_D.JPG' },
  { name: 'Warissa H.',    group: 2, role: 'Graphic Design Coordinator', committeeType: 'officer',  img: '/Team_Photos/Warissa_Hossain.JPG' },
  { name: 'Amanda G.',     group: 2, role: 'School Outreach Coordinator', committeeType: 'officer',  img: '/Team_Photos/Amanda_Gantugs.JPG' },
  { name: 'Peter T.',      group: 2, role: 'School Outreach Coordinator', committeeType: 'officer',  img: '/Team_Photos/Peter_Tran.png' },
  { name: 'Mia C.',        group: 2, role: 'Sisterhood Coordinator', committeeType: 'officer',  img: '/Team_Photos/MiaCarter.jpg' },
  { name: 'Belle L.',      group: 2, role: 'Sisterhood Coordinator', committeeType: 'officer',  img: '/Team_Photos/Belle_Lopez.jpeg' },
  { name: 'Lexi N.',       group: 2, role: 'Sisterhood Coordinator', committeeType: 'officer',  img: '/Team_Photos/Lexi_N_4.0.JPG' },

  // ===== WEBSITE (Group 3) =====
  { name: 'Anna G.',       group: 3, role: 'Website Co-Lead',  committeeType: 'website',  img: '/Team_Photos/Anna_Gelisanga.JPG' },
  { name: 'Amanda G.',     group: 3, role: 'Website Co-Lead',  committeeType: 'website',  img: '/Team_Photos/Amanda_Gantugs.JPG' },

  { name: 'Robee D.',      group: 3, role: 'Member',           committeeType: 'website',  img: '/Team_Photos/Robee_DelosSantos.JPG' },
  { name: 'Danniella M.',  group: 3, role: 'Member',           committeeType: 'website',  img: '/Team_Photos/Danniella_Martinez.JPG' },
  { name: 'Deanna S.',     group: 3, role: 'Member',           committeeType: 'website',  img: '/Team_Photos/Deanna_Solis.JPG' },
  { name: 'Krisha H.',     group: 3, role: 'Member',           committeeType: 'website',  img: '/Team_Photos/Krisha_H.JPG' },
  { name: 'Shreenithi T.', group: 3, role: 'Member',           committeeType: 'website', img:'' },
  { name: 'Bryan C.',      group: 3, role: 'Member',           committeeType: 'website', img:'' },

  // ===== DESIGN (Group 4) =====
  { name: 'Anita D.',      group: 4, role: 'Design Co-Lead',   committeeType: 'designer', img: '/Team_Photos/Anita_D.JPG' },
  { name: 'Warissa H.',    group: 4, role: 'Design Co-Lead',   committeeType: 'designer', img: '/Team_Photos/Warissa_Hossain.JPG' },

  { name: 'Hollie T.',     group: 4, role: 'Member',           committeeType: 'designer', img: '/Team_Photos/Hollie_Tran.JPG' },
  { name: 'Dhara S.',      group: 4, role: 'Member',           committeeType: 'designer', img: '/Team_Photos/Dhara_Shah.JPG' },
  { name: 'Celina T.',     group: 4, role: 'Member',           committeeType: 'designer', img: '/Team_Photos/Celina_Tong.JPG' },
  { name: 'Mishka M.',     group: 4, role: 'Member',           committeeType: 'designer',  img: '/Team_Photos/Mishka_Mansukhani.JPG' },

  // ===== SPONSORSHIP (Group 5) =====
  { name: 'Christina P.',  group: 5, role: 'Sponsorship Lead', committeeType: 'sponsorship', img: '/Team_Photos/Christina_Peralta.JPG' },

  { name: 'Mindy Y.',      group: 5, role: 'Member',           committeeType: 'sponsorship', img: '/Team_Photos/Mindy_Yun.JPG' },
  { name: 'Zarya A.',      group: 5, role: 'Member',           committeeType: 'sponsorship', img: '/Team_Photos/ZaryaAmin.jpeg' },
  { name: 'Antonio L.',    group: 5, role: 'Member',           committeeType: 'sponsorship', img:'' },
  { name: 'Brittanys T.',  group: 5, role: 'Member',           committeeType: 'sponsorship', img: ''},
  { name: 'Sara T.',       group: 5, role: 'Member',           committeeType: 'sponsorship', img: '/Team_Photos/Sara_Tfaili.JPG' },
];

let DemoPosts = [
  {
    caption: 'Just updated my profile pic! What do you think?',
    hashtags: '#hiking #naturelover #fitness',
    datetime: new Date(new Date().getTime() - 180400000),
    mediaUploads: [
      { src: '/uploads/profilenew.jpg', alt: 'Your Uploaded Photo' }
    ],
    uniqueId: Math.random()
      .toString(36)
      .substr(2, 9),
    templateName: '',
    pendingPost: false
  },
  {
    caption:
      'Out on a hike today looking for some flowers to photograph, it feels good to get out of the city for a while!',
    hashtags: '#photography #hikelife #sunshine #flowers',
    datetime: new Date(new Date().getTime() - 80400000),
    mediaUploads: [{ src: '/uploads/hike1.jpg', alt: 'Your Uploaded Photo' }],
    uniqueId: Math.random()
      .toString(36)
      .substr(2, 9),
    templateName: '',
    pendingPost: false
  },
  {
    caption:
      'Excited to see what the farmers market has for me today! Maybe some tasty jam or fresh apricots, mmmmm',
    hashtags: '#shopping #farmersmarket #blessed',
    datetime: new Date(new Date().getTime() + 30000),
    mediaUploads: [{ src: '/uploads/market.jpg', alt: 'Your Uploaded Photo' }],
    uniqueId: Math.random()
      .toString(36)
      .substr(2, 9),
    templateName: '',
    pendingPost: true
  },
  {
    caption:
      'Another Throwback for all my long time followers, remember these days?',
    hashtags: '#throwbackthursday #wishiwasthere #photographylovers #nature',
    datetime: new Date(new Date().getTime() + 60000),
    mediaUploads: [{ src: '/uploads/hike4.jpg', alt: 'Your Uploaded Photo' }],
    uniqueId: Math.random()
      .toString(36)
      .substr(2, 9),
    templateName: '',
    pendingPost: true
  },
  {
    caption: 'Another hike in our beautiful country! :heart:',
    hashtags: '#river #likeapainting #bridge #hiking #fitness ',
    datetime: new Date(new Date().getTime() + 1200000),
    mediaUploads: [
      { src: '/uploads/hike2.jpg', alt: 'Your Uploaded Photo' },
      { src: '/uploads/hike3.jpg', alt: 'Your Uploaded Photo' }
    ],
    uniqueId: Math.random()
      .toString(36)
      .substr(2, 9),
    templateName: '',
    pendingPost: true
  },
  {
    caption:
      'Wow! Check out the shot I managed to get the other day. The shadows, the lighting, dare I say it, it may be a perfect picture.',
    hashtags: '#waterfall #aftertherain #naturephotog',
    datetime: new Date(new Date().getTime() + 1800000),
    mediaUploads: [
      { src: '/uploads/waterfall.jpg', alt: 'Your Uploaded Photo' }
    ],
    uniqueId: Math.random()
      .toString(36)
      .substr(2, 9),
    templateName: '',
    pendingPost: true
  },
  {
    caption:
      "I think I'm gonna visit New York City someday, see the sights, you know, all the touristy stuff.",
    hashtags: '#newyorkcity #tourist #hiker4life #travelblog',
    datetime: new Date(new Date().getTime() + 3000000),
    mediaUploads: [{ src: '/uploads/travel.jpg', alt: 'Your Uploaded Photo' }],
    uniqueId: Math.random()
      .toString(36)
      .substr(2, 9),
    templateName: '',
    pendingPost: true
  },
  {
    caption:
      'Another stunning sunset over the river, feeling so #blessed on my hike today.',
    hashtags: '#beautiful #sunset #hikeblogger',
    datetime: new Date(new Date().getTime() + 46400000),
    mediaUploads: [{ src: '/uploads/hike5.jpg', alt: 'Your Uploaded Photo' }],
    uniqueId: Math.random()
      .toString(36)
      .substr(2, 9),
    templateName: '',
    pendingPost: true
  },
  {
    caption: 'Check out my new house!',
    hashtags: '#cozy #fireside #houseandhome',
    datetime: new Date(new Date().getTime() + 86400000),
    mediaUploads: [{ src: '/uploads/home.jpg', alt: 'Your Uploaded Photo' }],
    uniqueId: Math.random()
      .toString(36)
      .substr(2, 9),
    templateName: '',
    pendingPost: true
  },
  {
    caption:
      'Found some crazy ruins on my hike today. Anyone know what this place is?',
    hashtags: '#weirdrocks #ancienttemple #whatisthisthing',
    datetime: new Date(new Date().getTime() + 286400000),
    mediaUploads: [
      { src: '/uploads/hike7.jpg', alt: 'Your Uploaded Photo' },
      { src: '/uploads/hike8.jpg', alt: 'Your Uploaded Photo' },
      { src: '/uploads/hike9.jpg', alt: 'Your Uploaded Photo' },
      { src: '/uploads/hike10.jpg', alt: 'Your Uploaded Photo' }
    ],
    uniqueId: Math.random()
      .toString(36)
      .substr(2, 9),
    templateName: '',
    pendingPost: true
  }
];

export default DemoPosts;

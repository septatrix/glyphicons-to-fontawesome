const mapping = {
  asterisk: 'asterisk',
  plus: 'plus',
  euro: 'euro-sign',
  eur: 'euro-sign',
  minus: 'minus',
  cloud: 'cloud',
  envelope: 'envelope',
  pencil: 'pen',
  glass: 'glass-martini',
  music: 'music',
  search: 'search',
  heart: 'heart',
  star: 'star',
  'star-empty': ['far', 'fa-star'],
  user: 'user',
  film: 'film',
  'th-large': 'th-large',
  th: 'th',
  'th-list': 'th-list',
  ok: 'check',
  remove: 'times',
  'zoom-in': 'search-plus',
  'zoom-out': 'search-minus',
  off: 'power-off',
  signal: 'signal',
  cog: 'cog',
  trash: 'trash', // trash-alt
  home: 'home',
  file: 'file',
  time: ['far', 'fa-clock'],
  road: 'road',
  'download-alt': { tr: 'info', icon: 'download' },
  download: ['far', 'fa-arrow-alt-circle-down'], // arrow-circle-down
  upload: ['far', 'fa-arrow-alt-circle-up'], // arrow-circle-up
  inbox: 'inbox',
  'play-circle': ['far', 'fa-play-circle'],
  repeat: 'redo', // redo-alt
  refresh: 'sync', // sync-alt
  'list-alt': 'list-alt',
  lock: 'lock',
  flag: 'flag',
  headphones: 'headphones', // headphones-alt
  'volume-off': 'volume-mute',
  'volume-down': 'volume-down',
  'volume-up': 'volume-up',
  qrcode: 'qrcode',
  barcode: 'barcode',
  tag: 'tag',
  tags: 'tags',
  book: 'book',
  bookmark: 'bookmark',
  print: 'print',
  camera: 'camera',
  font: 'font',
  bold: 'bold',
  italic: 'italic',
  'text-height': 'text-height',
  'text-width': 'text-width',
  'align-left': 'align-left',
  'align-center': 'align-center',
  'align-right': 'align-right',
  'align-justify': 'align-justify',
  list: 'list',
  'indent-left': { tr: 'info', icon: 'indent' },
  'indent-right': { tr: 'info', icon: 'outdent' },
  'facetime-video': 'video',
  picture: ['far', 'fa-image'],
  'map-marker': 'map-marker',
  adjust: 'adjust',
  tint: 'tint',
  edit: 'edit',
  share: 'share-square', // share
  check: ['far', 'fa-check-square'],
  move: 'arrows-alt',
  'step-backward': 'step-backward',
  'fast-backward': 'fast-backward',
  backward: 'backward',
  play: 'play',
  pause: 'pause',
  stop: 'stop',
  forward: 'forward',
  'fast-forward': 'fast-forward',
  'step-forward': 'step-forward',
  eject: 'eject',
  'chevron-left': 'chevron-left',
  'chevron-right': 'chevron-right',
  'plus-sign': 'plus-circle',
  'minus-sign': 'minus-circle',
  'remove-sign': 'times-circle',
  'ok-sign': 'check-circle',
  'question-sign': 'question-circle',
  'info-sign': 'info-circle',
  screenshot: { tr: 'info', icon: 'crosshairs' },
  'remove-circle': ['far', 'fa-times-circle'],
  'ok-circle': ['far', 'fa-check-circle'],
  'ban-circle': 'ban',
  'arrow-left': 'arrow-left',
  'arrow-right': 'arrow-right',
  'arrow-up': 'arrow-up',
  'arrow-down': 'arrow-down',
  'share-alt': 'share',
  'resize-full': 'expand-alt',
  'resize-small': 'compress-alt',
  'exclamation-sign': 'exclamation-circle',
  gift: 'gift',
  leaf: 'leaf',
  fire: { tr: 'info', icon: 'fire' },
  'eye-open': 'eye',
  'eye-close': 'eye-slash',
  'warning-sign': 'exclamation-triangle',
  plane: 'plane',
  calendar: 'calendar', // calendar-alt
  random: 'random',
  comment: 'comment', // comment-alt
  magnet: 'magnet',
  'chevron-up': 'chevron-up',
  'chevron-down': 'chevron-down',
  retweet: 'retweet',
  'shopping-cart': 'shopping-cart',
  'folder-close': 'folder',
  'folder-open': 'folder-open',
  'resize-vertical': 'arrows-alt-v',
  'resize-horizontal': 'arrows-alt-h',
  hdd: 'hdd',
  bullhorn: 'bullhorn',
  bell: 'bell',
  certificate: 'certificate',
  'thumbs-up': ['far', 'fa-thumbs-up'],
  'thumbs-down': ['far', 'fa-thumbs-down'],
  'hand-right': ['far', 'fa-hand-point-right'],
  'hand-left': ['far', 'fa-hand-point-left'],
  'hand-up': ['far', 'fa-hand-point-up'],
  'hand-down': ['far', 'fa-hand-point-down'],
  'circle-arrow-right': 'arrow-alt-circle-right',
  'circle-arrow-left': 'arrow-alt-circle-left',
  'circle-arrow-up': 'arrow-alt-circle-up',
  'circle-arrow-down': 'arrow-alt-circle-down',
  globe: { tr: 'info', icon: 'globe' }, // globe-europe
  wrench: 'wrench',
  tasks: { tr: 'info', icon: 'tasks' },
  filter: 'filter',
  briefcase: 'briefcase',
  fullscreen: { tr: 'info', icon: 'expand' }, // expand-arrows-alt
  dashboard: { tr: 'info', icon: 'tachometer-alt' },
  paperclip: 'paperclip',
  'heart-empty': ['far', 'fa-heart'],
  link: 'link',
  phone: 'mobile-alt', // phone
  pushpin: 'thumbtack',
  usd: 'dollar-sign',
  gbp: 'pound-sign',
  sort: { tr: 'info', icon: 'sort' },
  'sort-by-alphabet': 'sort-alpha-down',
  'sort-by-alphabet-alt': 'sort-alpha-down-alt', // sort-alpha-up
  'sort-by-order': 'sort-numeric-down',
  'sort-by-order-alt': 'sort-numeric-down-alt', // sort-numeric-up
  'sort-by-attributes': 'sort-amount-down',
  'sort-by-attributes-alt': 'sort-amount-down-alt', // sort-amount-up
  unchecked: ['far', 'fa-square'],
  expand: ['far', 'fa-caret-square-right'],
  'collapse-down': ['far', 'fa-caret-square-down'],
  'collapse-up': ['far', 'fa-caret-square-up'],
  'log-in': 'sign-in-alt',
  flash: 'bolt',
  'log-out': 'sign-out-alt',
  'new-window': 'external-link-alt',
  record: ['far', 'fa-dot-circle'],
  save: 'download', // save
  open: 'upload',
  saved: { tr: 'warning', icon: 'check' },
  import: { tr: 'info', icon: 'file-import' }, // download
  export: { tr: 'info', icon: 'file-export' }, // upload
  send: 'paper-plane',
  'floppy-disk': 'save',
  'floppy-saved': { tr: 'warning', icon: 'check' },
  'floppy-remove': { tr: 'warning', icon: 'times' },
  'floppy-save': { tr: 'info', icon: 'download' },
  'floppy-open': { tr: 'info', icon: 'upload' },
  'credit-card': 'credit-card',
  transfer: 'exchange-alt',
  cutlery: 'utensils',
  header: 'heading',
  compressed: { tr: 'warning', icon: 'file-archive' },
  earphone: 'phone', // phone-alt
  'phone-alt': { tr: 'info', icon: 'phone-square' },
  tower: 'chess-rook', // building
  stats: 'chart-bar',
  'sd-video': { tr: 'warning', icon: 'film' },
  'hd-video': { tr: 'warning', icon: 'film' },
  subtitles: 'closed-captioning',
  'sound-stereo': { tr: 'warning', icon: 'music' },
  'sound-dolby': { tr: 'warning', icon: 'music' },
  'sound-5-1': { tr: 'warning', icon: 'music' },
  'sound-6-1': { tr: 'warning', icon: 'music' },
  'sound-7-1': { tr: 'warning', icon: 'music' },
  'copyright-mark': ['far', 'fa-copyright'],
  'registration-mark': ['far', 'fa-registered'],
  'cloud-download': 'cloud-download-alt',
  'cloud-upload': 'cloud-upload-alt',
  'tree-conifer': 'tree',
  'tree-deciduous': { tr: 'info', icon: 'tree' },
  cd: 'compact-disc',
  'save-file': 'file-download',
  'open-file': 'file-upload',
  'level-up': { tr: 'info', icon: 'level-up-alt' },
  copy: 'copy',
  paste: 'paste',
  alert: 'exclamation-triangle',
  equalizer: { tr: 'info', icon: 'chart-bar' },
  king: 'chess-king',
  queen: 'chess-queen',
  pawn: 'chess-pawn',
  bishop: 'chess-bishop',
  knight: 'chess-knight',
  'baby-formula': { tr: 'info', icon: 'baby' },
  tent: 'campground',
  blackboard: { tr: 'info', icon: 'chalkboard' },
  bed: { tr: 'info', icon: 'bed' },
  apple: 'apple-alt',
  erase: 'eraser',
  hourglass: ['far', 'fa-hourglass'],
  lamp: { tr: 'info', icon: 'lightbulb' },
  duplicate: { tr: 'info', icon: 'clone' },
  'piggy-bank': 'piggy-bank',
  scissors: 'cut',
  bitcoin: ['fab', 'fa-bitcoin'],
  btc: ['fab', 'fa-bitcoin'],
  xbt: ['fab', 'fa-bitcoin'],
  yen: 'yen-sign',
  jpy: 'yen-sign',
  ruble: 'ruble-sign',
  rub: 'ruble-sign',
  scale: { tr: 'warning', icon: 'balance-scale' },
  'ice-lolly': { tr: 'info', icon: 'ice-cream' },
  'ice-lolly-tasted': { tr: 'warning', icon: 'ice-cream' },
  education: 'graduation-cap',
  'option-horizontal': 'ellipsis-h',
  'option-vertical': 'ellipsis-v',
  'menu-hamburger': 'bars',
  'modal-window': { tr: 'danger', icon: 'window-restore' },
  oil: { tr: 'danger', icon: 'oil-can' },
  grain: { tr: 'danger' }, // 'grain',
  sunglasses: { tr: 'info', icon: 'glasses' },
  'text-size': { tr: 'warning', icon: 'font' },
  'text-color': { tr: 'warning', icon: 'font' },
  'text-background': { tr: 'warning', icon: 'font' },
  'object-align-top': { tr: 'danger' }, // 'object-align-top',
  'object-align-bottom': { tr: 'danger' }, // 'object-align-bottom',
  'object-align-horizontal': { tr: 'danger' }, // 'object-align-horizontal',
  'object-align-left': { tr: 'info', icon: 'align-left' },
  'object-align-vertical': { tr: 'danger' }, // 'object-align-vertical',
  'object-align-right': { tr: 'info', icon: 'align-right' },
  'triangle-right': 'caret-right',
  'triangle-left': 'caret-left',
  'triangle-bottom': 'caret-down',
  'triangle-top': 'caret-up',
  console: 'terminal',
  superscript: { tr: 'info', icon: 'superscript' },
  subscript: { tr: 'info', icon: 'subscript' },
  'menu-left': 'angle-left',
  'menu-right': 'angle-right',
  'menu-down': 'angle-down',
  'menu-up': 'angle-up',
}

const table = document.getElementById('mapping-table')
const tbody = document.createElement('tbody')
table.appendChild(tbody)

// @ts-ignore
for (const [gIcon, faIcon] of Object.entries(mapping)) {
  const tr = document.createElement('tr')

  const gCell = document.createElement('td')
  const gSpan = document.createElement('span')
  gSpan.classList.add('glyphicon', `glyphicon-${gIcon}`)

  gCell.title = gSpan.className
  gCell.appendChild(gSpan)
  tr.appendChild(gCell)

  const faCell = document.createElement('td')
  faCell.title = faIcon
  const faSpan = document.createElement('span')
  if (typeof faIcon == 'string') {
    faSpan.classList.add('fas', `fa-${faIcon}`)
  } else if (Array.isArray(faIcon)) {
    faSpan.classList.add(...faIcon)
  } else if (faIcon === null) {
    tr.classList.add('danger')
  } else if (faIcon instanceof Object) {
    tr.classList.add(faIcon.tr)
    if ('icon' in faIcon) faSpan.classList.add('fas', `fa-${faIcon.icon}`)
    if ('span' in faIcon) faSpan.classList.add(...faIcon.span)
  } else {
    console.warn(`Bad value for ${gIcon}: ${faIcon}`)
  }

  faCell.title = faSpan.className
  faCell.appendChild(faSpan)
  tr.appendChild(faCell)
  tbody.appendChild(tr)
}

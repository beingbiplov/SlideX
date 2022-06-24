const workspace = document.getElementById('workspace')
const previewWindow = document.getElementById('preview_window')
const slidePlaceholder = document.getElementsByClassName('content_section__main--placeholder')[0]

const newSlideBtn = document.getElementById('new_slide--btn')
const addNewSlideBtn = document.getElementById('add_new_slide_bottom_nav_btn')

const selLayoutBtn = document.getElementsByClassName('sel_layout--btn')
const selThemeBth = document.getElementsByClassName('sel_theme--btn')

const themeList = ['simple_dark', 'vertical_red_teal', 'streamline', 'beach_day', 'blue_horizon']

const addTextBoxBtn = document.getElementById('add_textbox')

const slide_textbox = document.getElementsByClassName('slide_textbox')

const textbox_contextmenu = document.querySelector('.textbox_context_menu')

const rigthPanelDiv = document.getElementById('right_panel')
const workspace = document.getElementById('workspace')
const previewWindow = document.getElementById('preview_window')
const slidePlaceholder = document.getElementsByClassName('content_section__main--placeholder')[0]
const slideMainSection = document.getElementsByClassName('content_section__main--slide')[0]

const newSlideBtn = document.getElementById('new_slide--btn')
const addNewSlideBtn = document.getElementById('add_new_slide_bottom_nav_btn')

const selLayoutBtn = document.getElementsByClassName('sel_layout--btn')
const selThemeBth = document.getElementsByClassName('sel_theme--btn')

const themeList = ['network_pattern', 'green_pattern', 'pink_patterns', 'blue_bg',  'simple_dark', 'red_blue', 'vertical_red_teal', 'streamline', 'beach_day', 'blue_horizon']

const addTextBoxBtn = document.getElementById('add_textbox')

const slide_textbox = document.getElementsByClassName('slide_textbox')

const textbox_contextmenu = document.querySelector('.textbox_context_menu')

const rigthPanelDiv = document.getElementById('right_panel')

const imageUploadNavBtn = document.getElementById('slide_img_upload_nav_btn')
const addLinkDiv = document.getElementById('add_link_btn')
const addTextBoxDiv = document.getElementById('add_textbox_btn')
const bottomNavThemeSelBtn = document.getElementById('bottom_nav_theme_select_btn')
const bottomNavLayoutSelBtn = document.getElementById('bottom_nav_layout_select_btn')

const slideShowDiv = document.getElementById('slideshow')
const presentSlideshowBtn = document.getElementById('present_slideshow_btn')

const addULBtn = document.getElementById('add_ul_btn')
const addOLBtn = document.getElementById('add_ol_btn')
const boldTextBtn = document.getElementById('bold_text_btn')
const fontSizeInput = document.getElementById('font-size-input')
const italicTextBtn = document.getElementById('italic_text_btn')
const underlineTextBtn = document.getElementById('underline_text_btn')
const fontSelector = document.getElementById('slide_text_font')
const colorPicker = document.getElementById('colorpicker')
const bgColorPicker = document.getElementById('bg_colorpicker')

const saveBtn = document.getElementById('save_btn')

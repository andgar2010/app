import Vue from 'vue';

import InvisibleLabel from './components/invisible-label.vue';
import Loader from './components/loader.vue';
import VAvatar from './components/avatar.vue';
import VCard from './components/card/card.vue';
import VDetails from './components/details.vue';
import VNotice from './components/notice.vue';
import VTable from './components/table/table.vue';
import VTimeAgo from './components/time-ago.vue';

import VExtInput from './components/extension/interface/input/input.vue';
import VExtDisplay from './components/extension/interface/display/display.vue';
import VExtLayout from './components/extension/layout/layout/layout.vue';
import VExtLayoutOptions from './components/extension/layout/layout-options/layout-options.vue';
import VExtModule from './components/extension/module/module.vue';

import VItems from './components/items.vue';
import VForm from './components/form/form.vue';

import VButton from './components/v-button/';
import VCheckbox from './components/v-checkbox/';
import VIcon from './components/v-icon/';
import VSpinner from './components/v-spinner/';
import VSwitch from './components/v-switch/';

import VInput from './components/form-inputs/input.vue';
import VRadio from './components/form-inputs/radio.vue';
import VSelect from './components/form-inputs/select.vue';
import VSimpleSelect from './components/form-inputs/simple-select.vue';
import VSlider from './components/form-inputs/slider.vue';
import VTextarea from './components/form-inputs/textarea.vue';

import VAlert from './components/modals/alert.vue';
import VConfirm from './components/modals/confirm.vue';
import VModal from './components/modals/modal.vue';
import VPrompt from './components/modals/prompt.vue';

import VHeader from './components/header/header.vue';
import VHeaderButton from './components/header/header-button.vue';
import VInfoSidebar from './components/sidebars/info-sidebar.vue';

import VError from './components/error.vue';
import VUpload from './components/upload.vue';
import VProgressRing from './components/progress-ring.vue';
import VContextualMenu from './components/contextual-menu.vue';

import VTag from './components/tag.vue';

import VItemSelect from './components/item-select/item-select.vue';
import VProgress from './components/progress.vue';
import VUserPopover from './components/user-popover.vue';
import VSheet from './components/sheet.vue';

// Extensions
Vue.component('v-ext-module', VExtModule);
Vue.component('v-ext-input', VExtInput);
Vue.component('v-ext-display', VExtDisplay);
Vue.component('v-ext-layout', VExtLayout);
Vue.component('v-ext-layout-options', VExtLayoutOptions);

// Item Listing
Vue.component('v-items', VItems);

// Edit form
Vue.component('v-form', VForm);

// Form inputs
Vue.component('v-button', VButton);
Vue.component('v-checkbox', VCheckbox);
Vue.component('v-input', VInput);
Vue.component('v-radio', VRadio);
Vue.component('v-select', VSelect);
Vue.component('v-simple-select', VSimpleSelect);
Vue.component('v-slider', VSlider);
Vue.component('v-textarea', VTextarea);
Vue.component('v-switch', VSwitch);

// Modals
Vue.component('v-alert', VAlert);
Vue.component('v-confirm', VConfirm);
Vue.component('v-modal', VModal);
Vue.component('v-prompt', VPrompt);

// Page Chrome
Vue.component('v-header', VHeader);
Vue.component('v-header-button', VHeaderButton);
Vue.component('v-info-sidebar', VInfoSidebar);

Vue.component('v-error', VError);

Vue.component('invisible-label', InvisibleLabel);
Vue.component('loader', Loader);
Vue.component('v-spinner', VSpinner);
Vue.component('v-avatar', VAvatar);
Vue.component('v-card', VCard);
Vue.component('v-details', VDetails);
Vue.component('v-notice', VNotice);
Vue.component('v-table', VTable);
Vue.component('v-time-ago', VTimeAgo);

Vue.component('v-upload', VUpload);
Vue.component('v-progress-ring', VProgressRing);
Vue.component('v-icon', VIcon);
Vue.component('v-tag', VTag);
Vue.component('v-contextual-menu', VContextualMenu);
Vue.component('v-item-select', VItemSelect);
Vue.component('v-progress', VProgress);
Vue.component('v-user-popover', VUserPopover);
Vue.component('v-sheet', VSheet);

<template>
  <div class="language-selector">
    <div class="main">
      <span
        v-if="$i18n.locale === 'en'"
        class="selected"
      >
        English
      </span>

      <span
        v-if="$i18n.locale === 'uk'"
        class="selected"
      >
        Українська
      </span>

      <div class="options">
        <span
          class="option"
          @click="$i18n.locale = 'en'"
        >
          English
        </span>

        <span
          class="option"
          @click="$i18n.locale = 'uk'"
        >
          Українська
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LanguageSelector'
}
</script>

<style scoped>
.language-selector {
  position: absolute;
  top: 5px;
  right: 120px;
}

.main {
  position: relative;
  width: auto;
  display: flex;
  gap: 4px;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  justify-content: center;
}

.selected {
  padding-right: 4px;
  padding-left: 2px;
  color: var(--text-primary-color);
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  cursor: pointer;
}

.options {
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: 50px;
  background: var(--background-color-reverse);
  box-shadow: 0px 6px 30px rgba(62, 65, 71, 0.12);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: 128px;
}

.option {
  padding: 8px 16px;
  color: var(--text-reverse-color);
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;
}

.option:hover {
  background: var(--background-color-reverse-secondary);
}

.main:hover .options {
  opacity: 1;
  visibility: visible;
}
</style>
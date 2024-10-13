<script setup>
import InformationContent from './components/informations/InformationContent.vue'

</script>

<template>
    <div class="rounded-xl p-7 bg-white dark:bg-slate-700/30">
        <h2 class="mb-4 text-lg font-semibold dark:text-slate-50">{{ $t('information') }}</h2>
        <!-- Info -->
        <div class="space-y-4">
            <!-- Email -->
            <InformationContent icon="EnvelopeIcon" content="radehrgo96@gmail.com" subText="Mail address" />
            <!-- Dob -->
            <InformationContent icon="CakeIcon" content="28 November 1996" subText="27 years old" />
            <!-- Phone Number -->
            <InformationContent icon="DevicePhoneMobileIcon" content="+389 78 882 993" subText="Phone Number" />
            <!-- Work Type -->
            <InformationContent icon="ComputerDesktopIcon" content="Remote or Fulltime" subText="Work type" />
        </div>
    </div>
</template>

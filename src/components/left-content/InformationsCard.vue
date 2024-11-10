<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import InformationContent from './components/informations/InformationContent.vue'

defineOptions({
  name: 'Informations',
})

// Calculate Date of Birth
function calculateAge(dateOfBirth) {
  // Parse the date string
  const [day, month, year] = dateOfBirth.split("-").map(Number);
  const birthDate = new Date(year, month - 1, day); // month is 0-indexed

  // Get today's date
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();

  // Check if birthday has not passed yet this year
  const isBirthdayPassed =
    today.getMonth() > birthDate.getMonth() || 
    (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

  // If birthday has not passed, subtract 1 from the age
  if (!isBirthdayPassed) {
    age--;
  }

  return age;
}

</script>

<template>
  <div class="rounded-xl p-7 bg-white dark:bg-slate-700/30">
    <h2 class="mb-4 text-lg font-semibold dark:text-slate-50">{{ $t('information.title') }}</h2>
    <!-- Info -->
    <div class="space-y-4">
      <!-- Email -->
      <InformationContent icon="EnvelopeIcon" content="radehrgo96@gmail.com" :subText="$t('information.information_list.email')" />
      <!-- Dob -->
      <InformationContent icon="CakeIcon" :content="$t('information.information_list.date_of_birth.dob')" :subText="calculateAge('28-11-1996') + ' ' + $t('information.information_list.date_of_birth.sub_text')" />
      <!-- Work Type -->
      <InformationContent icon="ComputerDesktopIcon" :content="$t('information.information_list.work_type.text')" :subText="$t('information.information_list.work_type.sub_text')" />
    </div>
  </div>
</template>

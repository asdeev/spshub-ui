<template>
  <!-- vue:test -->
  <v-container>
    <v-layout wrap justify-space-between="">
      <v-flex>
        <v-form ref="form">
          <v-text-field ref="firstName" label="First Name"></v-text-field>
          <v-text-field ref="lastName" label="Last Name"></v-text-field>
          <v-text-field
            ref="email"
            label="Email"
            hint="Will be kept private - only the web administrators can view it"
          ></v-text-field>
          <v-text-field ref="major" label="Major"></v-text-field>
          <v-text-field
            ref="companyOrSector"
            label="Company/Sector"
          ></v-text-field>
          <v-text-field
            ref="designationOrRole"
            label="Professional Designation / Role"
          ></v-text-field>
          <v-textarea
            ref="fieldChoice"
            label="Why did you choose this field?"
            counter="250"
          ></v-textarea>
          <v-textarea
            ref="majorChallenges"
            label="What are major challenges you met during your educational experience?"
            hint="How did you overcome your obstacles/challenges?"
            counter="250"
          ></v-textarea>
          <v-textarea
            ref="mentorAdvice"
            label="What advice would you give to someone interested in this field?"
            counter="250"
          ></v-textarea>
          <v-textarea
            ref="areasOfMentorship"
            label="Areas of mentorship"
            hint="What would you like to mentor students on? What are your areas of expertise?"
            counter="250"
          ></v-textarea>
          <v-textarea
            ref="motivationForMentoring"
            label="Motivation of being a mentor"
            hint="Why did you decide to be a mentor on the Design Odyssey program?"
            counter="250"
          ></v-textarea>
          <v-text-field
            type="number"
            ref="monthlyMentoringHours"
            label="Estimated number of hours of mentorship per month"
            suffix="Hrs"
          >
          </v-text-field>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'JoinSPSHubRoute'
};
</script>

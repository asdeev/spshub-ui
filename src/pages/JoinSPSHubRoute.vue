<template>
  <!-- vue:test -->
  <v-container>
    <v-layout wrap justify-space-between="">
      <v-flex>
        <v-form ref="form" class="form-container">
          <v-layout justify-space-between row>
            <v-flex md4>
              <v-text-field
                class="field-spacing"
                ref="firstName"
                v-model="firstName"
                v-validate="'required'"
                :error-messages="errors.collect('firstName')"
                label="First Name"
                data-vv-name="firstName"
                required
              ></v-text-field>
            </v-flex>
            <v-flex md4>
              <v-text-field
                class="field-spacing"
                ref="lastName"
                v-model="lastName"
                v-validate="'required'"
                :error-messages="errors.collect('lastName')"
                label="Last Name"
                data-vv-name="lastName"
                required
              ></v-text-field>
            </v-flex>
            <v-flex md4>
              <v-text-field
                class="field-spacing"
                ref="email"
                v-model="email"
                v-validate="'required'"
                :error-messages="errors.collect('email')"
                label="Email"
                hint="Will be kept private - only the web administrators can view it"
                data-vv-name="email"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout justify-space-between row>
            <v-flex md6>
              <v-text-field
                class="field-spacing"
                ref="school"
                v-model="school"
                v-validate="'required'"
                :error-messages="errors.collect('school')"
                label="School"
                data-vv-name="school"
                required
              ></v-text-field>
            </v-flex>
            <v-flex md6>
              <v-text-field
                class="field-spacing"
                ref="major"
                v-model="major"
                v-validate="'required'"
                :error-messages="errors.collect('major')"
                label="Major"
                data-vv-name="major"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout justify-space-between row>
            <v-flex md6>
              <v-text-field
                class="field-spacing"
                ref="companyOrSector"
                v-model="companyOrSector"
                v-validate="'required'"
                :error-messages="errors.collect('companyOrSector')"
                label="Company/Sector"
                data-vv-name="companyOrSector"
                required
              ></v-text-field>
            </v-flex>
            <v-flex md6>
              <v-text-field
                class="field-spacing"
                ref="designationOrRole"
                v-model="designationOrRole"
                v-validate="'required'"
                :error-messages="errors.collect('designationOrRole')"
                label="Professional Designation/Role"
                data-vv-name="designationOrRole"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-textarea
            class="field-spacing"
            ref="fieldChoice"
            v-model="fieldChoice"
            v-validate="'required|max:250'"
            :error-messages="errors.collect('fieldChoice')"
            label="Why did you choose this field?"
            data-vv-name="fieldChoice"
            required
            counter="250"
          ></v-textarea>
          <v-textarea
            class="field-spacing"
            ref="majorChallenges"
            v-model="majorChallenges"
            v-validate="'required|max:250'"
            :error-messages="errors.collect('majorChallenges')"
            label="What are major challenges you met during your educational experience?"
            hint="How did you overcome your obstacles/challenges?"
            data-vv-name="majorChallenges"
            required
            counter="250"
          ></v-textarea>
          <v-textarea
            class="field-spacing"
            ref="mentorAdvice"
            v-model="mentorAdvice"
            v-validate="'required|max:250'"
            :error-messages="errors.collect('mentorAdvice')"
            label="What advice would you give to someone interested in this field?"
            data-vv-name="mentorAdvice"
            required
            counter="250"
          ></v-textarea>
          <v-textarea
            class="field-spacing"
            ref="areasOfMentorship"
            v-model="areasOfMentorship"
            v-validate="'required|max:50'"
            :error-messages="errors.collect('areasOfMentorship')"
            label="Areas of mentorship"
            hint="What would you like to mentor students on? What are your areas of expertise?"
            data-vv-name="areasOfMentorship"
            required
            counter="50"
          ></v-textarea>
          <v-textarea
            class="field-spacing"
            ref="motivationForMentoring"
            v-model="motivationForMentoring"
            v-validate="'required|max:100'"
            :error-messages="errors.collect('motivationForMentoring')"
            label="Motivation of being a mentor"
            hint="Why did you decide to be a mentor on the Design Odyssey program?"
            data-vv-name="motivationForMentoring"
            required
            counter="100"
          ></v-textarea>
          <v-layout justify-start row>
            <v-flex md4>
              <v-text-field
                class="field-spacing"
                type="number"
                ref="monthlyMentoringHours"
                v-model="monthlyMentoringHours"
                v-validate="'required'"
                :error-messages="errors.collect('monthlyMentoringHours')"
                label="Estimated number of hours of mentorship per month"
                suffix="Hrs"
                data-vv-name="monthlyMentoringHours"
                required
              >
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-btn @click="submit">submit</v-btn>
          <v-btn @click="clear">clear</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  $_veeValidate: {
    validator: 'new'
  },
  data: () => ({
    firstName: '',
    lastName: '',
    email: '',
    school: '',
    major: '',
    companyOrSector: '',
    designationOrRole: '',
    fieldChoice: '',
    majorChallenges: '',
    mentorAdvice: '',
    areasOfMentorship: '',
    motivationForMentoring: '',
    monthlyMentoringHours: 0,
    dictionary: {
      attributes: {
        email: 'Email Address'
      },
      custom: {
        firstName: {
          required: 'First Name cannot be empty'
        },
        lastName: {
          required: 'Last Name cannot be empty'
        },
        email: {
          required: 'Email cannot be empty'
        },
        school: {
          required: 'School cannot be empty'
        },
        major: {
          required: 'Major cannot be empty'
        },
        companyOrSector: {
          required: 'Company/Sector cannot be empty'
        },
        designationOrRole: {
          required: 'Professional Designation/Role cannot be empty'
        },
        fieldChoice: {
          required: 'Field Choice cannot be empty',
          max: 'Field Choice cannot be greater than 250 characters'
        },
        majorChallenges: {
          required: 'Major Challenges cannot be empty',
          max: 'Major Challenges cannot be greater than 250 characters'
        },
        mentorAdvice: {
          required: 'Mentor Advice cannot be empty',
          max: 'Mentor Advice cannot be greater than 250 characters'
        },
        areasOfMentorship: {
          required: 'Areas of Mentorship cannot be empty',
          max: 'Areas of Mentorship cannot be greater than 50 characters'
        },
        motivationForMentoring: {
          required: 'Motivation for Mentoring cannot be empty',
          max: 'Motivation for Mentoring cannot be greater than 100 characters'
        },
        monthlyMentoringHours: {
          required: 'Monthly Mentoring Hours cannot be empty'
        }
      }
    }
  }),
  mounted() {
    this.$validator.localize('en', this.dictionary);
  },
  methods: {
    submit() {
      this.$validator.validateAll();
    },
    clear() {
      this.$validator.reset();
    }
  },
  name: 'JoinSPSHubRoute'
};
</script>

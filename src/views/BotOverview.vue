<template>
  <div class="bg-sky-700 text-center text-slate-100 py-12">
    <h1 class="text-4xl font-bold">ULOGEN</h1>
  </div>
  <o-collapse
    :open="false"
    animation="slide"
    rootClass="bg-sky-700/70 hover:bg-sky-700/60 text-center text-slate-100"
  >
    <template #trigger="props">
      <div class="p-1">
        <o-icon v-if="props.open" icon="caret-up"> </o-icon>
        <o-icon v-else icon="magnifying-glass"> </o-icon>
      </div>
    </template>
    <div>
      <div class="content">
        <div class="p-4 text-center">
          <o-field>
            <o-input
              v-model="searchTerm"
              placeholder="Bot Analyzer Search"
              inputClass="text-center"
              icon-right="xmark"
              icon-right-clickable
              @icon-right-click="clearSearchTerm"
            ></o-input>
          </o-field>
        </div>
      </div>
    </div>
  </o-collapse>
  <div class="flex flex-col">
    <div class="flex justify-center">
      <router-link :to="{ name: 'Modeler' }" v-if="!searchTerm">
        <BotOverviewCard></BotOverviewCard>
      </router-link>
      <BotOverviewCard
        v-for="botModel in filteredOperations"
        :botModel="botModel"
        @bot-added="addToSelectedBots"
      >
      </BotOverviewCard>
    </div>
    <b class="flex justify-center">These are the selected bots to generate a UI log from: </b>
    <div class="flex justify-center" v-for="selectedBot in selectedBotsForUiLog" :key="selectedBot._id">
        {{ selectedBot.name }}
    </div>
    <div class="flex justify-center mt-4">
      <button @click="triggerUiLogGeneration" class="bg-action text-white font-bold py-2 px-4 rounded w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 max-w-screen-md">Generate UI log</button>
    </div>
    <div v-if="searchTerm && filteredOperations.length === 0" class="m-4">
        No Bots found.
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: "overview",
  data() {
    return {
      botModels: [] as BotModel[],
      searchTerm: "",
      selectedBotsForUiLog: [] as any[],
    };
  },
  async mounted(): Promise<void> {
    this.botModels = await botModelApi.getBotModels();
  },
  methods: {
    clearSearchTerm() {
      this.searchTerm = "";
    },
    addToSelectedBots (bot: any) {
      console.log("added bot: ", bot._id)
      this.selectedBotsForUiLog.push(bot);
    },
    async triggerUiLogGeneration() {
      let uiLogBotModels: any[] = this.botModels.filter((botModel) => this.selectedBotsForUiLog.some((bot) => bot._id === botModel._id));
      // api call to backend with passing all ids
      let specificBotModels: any[] = await botModelApi.generateUiLogs(uiLogBotModels);
      console.log(specificBotModels)

    },
  },
  computed: {
    filteredOperations() {
      if (!this.searchTerm) {
        return this.botModels;
      }

      const searchTerms = this.searchTerm.toLowerCase().split(" ");
      return this.botModels.filter((botModel) =>
        searchTerms.every((term) => {
          let foundTerm = false;
          for (const node in botModel.processTree.nodeInfo) {
            if (
              botModel.processTree.nodeInfo[node].concept
                .toLowerCase()
                .includes(term)
            ) {
              foundTerm = true;
            }
          }
          return foundTerm;
        })
      );
    },
  },
});
</script>

<script setup lang="ts">
import { defineComponent } from "vue";
import botModelApi from "../api/botModelApi";
import BotModel from "../interfaces/BotModel";
import BotOverviewCard from "../components/BotOverview/BotOverviewCard.vue";
</script>

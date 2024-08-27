<template>
  <div>
    <h2>Contribution activity</h2>

    <div id="github-calendar"></div>
  </div>
</template>

<script>
import GitHubCalendar from "github-calendar";
import "github-calendar/dist/github-calendar.css";

export default {
  name: 'GithubActivity',

  mounted() {
    GitHubCalendar("#github-calendar", "oksanaVlasenko", { 
      global_stats: false, tooltips: true, responsive: true
    })
  }
}
</script>

<style>
#github-calendar span {
  background-color: transparent !important;
  /* transform: scale(1.05); 
  transform-origin: top left; */
}

#github-calendar table {
  border-collapse: separate;
}

a.Link--muted {
  display: none !important;
}

td.ContributionCalendar-label span[aria-hidden='true'] {
  background-color: transparent !important;
  transform: translateY(-4px);
}

.graph-before-activity-overview {
  @apply 
  rounded-lg bg-white dark:bg-zinc-800/90 shadow-md min-h-[40vh] lg:w-[120vh] h-auto w-full flex flex-col justify-center my-4;
}
</style>
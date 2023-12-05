<template>
  <div class="attrib">
    <div class="attrib__wrapper">

      <BaseHeadingFive heading-title="Image Attribution"  />

      <p class="attrib__par">
        Here is the list of image attributions for the content on my website:
      </p>

      <ul class="attrib__lists">
        <li class="attrib__list">
          <a
            class="attrib__link"
            target="_blank"
            href="https://www.freepik.com/free-photo/raw-chicken-meat_1114754.htm#query=chicken%20meat&position=0&from_view=search&track=ais&uuid=187fc1b7-442a-4242-806f-d36967997b22"
            >Image by mrsiraphol</a
          >
          on Freepik
        </li>
        <li class="attrib__list">
          <a
            class="attrib__link"
            target="_blank"
            href="https://www.freepik.com/free-photo/raw-fresh-chicken-meat_3707264.htm#query=chicken%20meat&position=7&from_view=search&track=ais&uuid=187fc1b7-442a-4242-806f-d36967997b22"
            >Image by lifeforstock</a
          >
          on Freepik
        </li>
        <li class="attrib__list">
          <a
            class="attrib__link"
            target="_blank"
            href="https://www.freepik.com/free-photo/raw-board-breast-cutting-fresh_1044792.htm?query=chicken meat"
            >Image by mrsiraphol</a
          >
          on Freepik
        </li>
        <li class="attrib__list">
          <a
            class="attrib__link"
            target="_blank"
            href="https://www.freepik.com/free-photo/bird-chicken-space-object-shot_1044789.htm?query=chicken meat"
            >Image by mrsiraphol</a
          >
          on Freepik
        </li>
        <li class="attrib__list">
          <a
            class="attrib__link"
            target="_blank"
            href="https://www.freepik.com/free-photo/close-chicken-background-hands-food_1044790.htm?query=chicken meat"
            >Image by mrsiraphol</a
          >
          on Freepik
        </li>
        <li class="attrib__list">
          <a
            class="attrib__link"
            target="_blank"
            href="https://www.freepik.com/free-photo/raw-pork-meat-isolated_1114727.htm#query=beef%20meat&position=13&from_view=search&track=ais&uuid=399bf8d4-0aff-4dff-a799-dc64c6fd0448"
            >Image by mrsiraphol</a
          >
          on Freepik
        </li>
        <li class="attrib__list">
          <a
            class="attrib__link"
            target="_blank"
            href="https://www.freepik.com/free-photo/rib-beef-barbecue-pork-fresh_1089395.htm?query=beef meat"
            >Image by mrsiraphol</a
          >
          on Freepik
        </li>
        <li class="attrib__list">
          <a
            class="attrib__link"
            target="_blank"
            href="https://www.freepik.com/free-photo/raw-meat_8172565.htm#query=pork%20meat&position=14&from_view=search&track=ais&uuid=08ff7c13-1a8a-4df3-ad2a-6749da3e7e00"
            >Image by Racool_studio</a
          >
          on Freepik
        </li>
        <li class="attrib__list">
          <a
            class="attrib__link"
            target="_blank"
            href="https://www.freepik.com/free-photo/top-view-fresh-meat-slices-raw-meat-round-wooden-desk-dark-food-freshness-animal-cow-food-kitchen_17232555.htm?query=pork meat"
            >Image by KamranAydinov</a
          >
          on Freepik
        </li>
        <li class="attrib__list">
          <a
            class="attrib__link"
            target="_blank"
            href="https://www.freepik.com/free-photo/raw-meat_9185303.htm#query=pork%20meat&position=34&from_view=search&track=ais&uuid=08ff7c13-1a8a-4df3-ad2a-6749da3e7e00"
            >Image by Racool_studio</a
          >
          on Freepik
        </li>
      </ul>

      <p class="attrib__par">
        If you find your image included and would like proper attribution or
        have any concerns, please feel free to reach out to me. I value proper
        credit and want to ensure all contributors are acknowledged
        appropriately. You can use this <router-link to="/contact" class="attrib__link">link</router-link> to contact me and provide the
        necessary information for attribution adjustments.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../sass/variables";
.attrib {
  padding: 14rem 2rem 8rem 2rem;

  &__wrapper {
    max-width: 120rem;
    margin: 0 auto;
    overflow: hidden;
  }

  &__par {
    font-size: 1.6rem;
    color: $black-tint;

  }

  &__lists {
    margin: 2rem 0;
  }

  &__list {
    // list-style: none;
    margin-left: 2rem;
    font-size: 1.6rem;
    font-weight: 500;
  }

  &__link,
  &__link:link,
  &__link:visited,
  &__link:focus {
    text-decoration: none;
    color: $black-tint;
    font-size: 1.6rem;

    transition: color 0.3s ease;
    font-weight: 500;
    &:hover {
      color: $main;
    }
  }
}
</style>

/* eslint-disable */
import React from 'react'
import ReferencePage from '../../reference-page'


const AvatarPage = () => (
  <ReferencePage data={{"tags":{"see":"AvatarGroup *\n{@link https://northlight.dev/reference/avatar}","example":"(Example)\nAvatar takes a name and image\n(?\n<Avatar name=\"Anakin Skywalker\" image='https://thenerdstash.com/wp-content/uploads/2021/10/Hayden-Christensen-Anakin-Skywalker.jpg' />\n?)\n\n<br />\nIf there is no image, it will render the initials of the name along with a random bg color.\n(?\n<Avatar name=\"Anakin Skywalker\" />\n?)\n\n<br />\n\nIf the name also is undefined, it will render a fallback icon\n(?\n<Avatar />\n?)"},"filePath":"/Users/orestisrodriguez/Documents/Projects/@mediatool/northlight/framework/lib/components/avatar/avatar.tsx","description":"","displayName":"Avatar","methods":[],"props":{"name":{"defaultValue":null,"description":"The name of the person in the avatar.\n\n- if `src` has loaded, the name will be used as the `alt` attribute of the `img`\n- If `src` is not loaded, the name will be used to create the initials","name":"name","parent":{"fileName":"northlight/framework/lib/components/avatar/types.ts","name":"AvatarProps"},"declarations":[{"fileName":"northlight/framework/lib/components/avatar/types.ts","name":"AvatarProps"}],"required":false,"type":{"name":"string"}},"image":{"defaultValue":null,"description":"","name":"image","parent":{"fileName":"northlight/framework/lib/components/avatar/types.ts","name":"AvatarProps"},"declarations":[{"fileName":"northlight/framework/lib/components/avatar/types.ts","name":"AvatarProps"}],"required":false,"type":{"name":"string"}},"notificationCount":{"defaultValue":{"value":"0"},"description":"This will render a badge in the corner of the avatar","name":"notificationCount","parent":{"fileName":"northlight/framework/lib/components/avatar/types.ts","name":"AvatarProps"},"declarations":[{"fileName":"northlight/framework/lib/components/avatar/types.ts","name":"AvatarProps"}],"required":false,"type":{"name":"number"}},"size":{"defaultValue":null,"description":"","name":"size","parent":{"fileName":"northlight/framework/lib/components/avatar/types.ts","name":"AvatarProps"},"declarations":[{"fileName":"northlight/framework/lib/components/avatar/types.ts","name":"AvatarProps"}],"required":false,"type":{"name":"enum","raw":"\"sm\" | \"md\" | \"lg\" | \"2xs\" | \"xs\"","value":[{"value":"\"sm\""},{"value":"\"md\""},{"value":"\"lg\""},{"value":"\"2xs\""},{"value":"\"xs\""}]}},"variant":{"defaultValue":{"value":"square"},"description":"","name":"variant","parent":{"fileName":"northlight/framework/lib/components/avatar/types.ts","name":"AvatarProps"},"declarations":[{"fileName":"northlight/framework/lib/components/avatar/types.ts","name":"AvatarProps"}],"required":false,"type":{"name":"enum","raw":"\"rounded\" | \"square\"","value":[{"value":"\"rounded\""},{"value":"\"square\""}]}},"colorScheme":{"defaultValue":null,"description":"","name":"colorScheme","parent":{"fileName":"northlight/node_modules/@chakra-ui/styled-system/dist/index.d.ts","name":"ThemingProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/styled-system/dist/index.d.ts","name":"ThemingProps"}],"required":false,"type":{"name":"enum","raw":"(string & {}) | \"blue\" | \"cyan\" | \"gray\" | \"green\" | \"orange\" | \"pink\" | \"purple\" | \"red\" | \"teal\" | \"yellow\" | \"whiteAlpha\" | \"blackAlpha\" | \"linkedin\" | \"facebook\" | \"messenger\" | \"whatsapp\" | \"twitter\" | \"telegram\"","value":[{"value":"string & {}"},{"value":"\"blue\""},{"value":"\"cyan\""},{"value":"\"gray\""},{"value":"\"green\""},{"value":"\"orange\""},{"value":"\"pink\""},{"value":"\"purple\""},{"value":"\"red\""},{"value":"\"teal\""},{"value":"\"yellow\""},{"value":"\"whiteAlpha\""},{"value":"\"blackAlpha\""},{"value":"\"linkedin\""},{"value":"\"facebook\""},{"value":"\"messenger\""},{"value":"\"whatsapp\""},{"value":"\"twitter\""},{"value":"\"telegram\""}]}},"orientation":{"defaultValue":null,"description":"","name":"orientation","parent":{"fileName":"northlight/node_modules/@chakra-ui/styled-system/dist/index.d.ts","name":"ThemingProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/styled-system/dist/index.d.ts","name":"ThemingProps"}],"required":false,"type":{"name":"enum","raw":"\"horizontal\" | \"vertical\"","value":[{"value":"\"horizontal\""},{"value":"\"vertical\""}]}},"styleConfig":{"defaultValue":null,"description":"","name":"styleConfig","parent":{"fileName":"northlight/node_modules/@chakra-ui/styled-system/dist/index.d.ts","name":"ThemingProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/styled-system/dist/index.d.ts","name":"ThemingProps"}],"required":false,"type":{"name":"Record<string, any>"}}}}} />
);

export default AvatarPage

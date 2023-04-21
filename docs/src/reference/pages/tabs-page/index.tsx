/* eslint-disable */
import React from 'react'
import ReferencePage from '../../reference-page'


const TabsPage = () => (
  <ReferencePage data={{"tags":{"see":"TabList *\nTabPanels *\n{@link https://northlight.dev/reference/tabs}","example":"(?\n <Tabs>\n <Stack spacing=\"2\">\n   <TabList>\n     <Tab>One</Tab>\n     <Tab>Two</Tab>\n     <Tab>Three</Tab>\n   </TabList>\n   <TabPanels>\n     <TabPanel>\n       <P>one!</P>\n     </TabPanel>\n     <TabPanel>\n       <P>two!</P>\n     </TabPanel>\n     <TabPanel>\n       <P>three!</P>\n     </TabPanel>\n   </TabPanels>\n   </Stack>\n </Tabs>\n?)"},"filePath":"/Users/orestisrodriguez/Documents/Projects/@mediatool/northlight/framework/lib/components/tabs/tabs.tsx","description":"Context provider for tabs tabs","displayName":"Tabs","methods":[],"props":{"children":{"defaultValue":null,"description":"","name":"children","parent":{"fileName":"northlight/node_modules/@chakra-ui/tabs/dist/tabs.d.ts","name":"TabsProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/tabs/dist/tabs.d.ts","name":"TabsProps"}],"required":true,"type":{"name":"enum","raw":"ReactNode","value":[{"value":"string"},{"value":"number"},{"value":"false"},{"value":"true"},{"value":"ReactElement<any, string | JSXElementConstructor<any>>","description":"","fullComment":"","tags":{}},{"value":"ReactFragment","description":"","fullComment":"","tags":{}},{"value":"ReactPortal","description":"","fullComment":"","tags":{}}]}},"orientation":{"defaultValue":{"value":"\"horizontal\""},"description":"The orientation of the tab list.","name":"orientation","parent":{"fileName":"northlight/node_modules/@chakra-ui/tabs/dist/use-tabs.d.ts","name":"UseTabsProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/tabs/dist/use-tabs.d.ts","name":"UseTabsProps"}],"required":false,"type":{"name":"enum","raw":"\"horizontal\" | \"vertical\"","value":[{"value":"\"horizontal\""},{"value":"\"vertical\""}]}},"isManual":{"defaultValue":{"value":"false"},"description":"If `true`, the tabs will be manually activated and\ndisplay its panel by pressing Space or Enter.\n\nIf `false`, the tabs will be automatically activated\nand their panel is displayed when they receive focus.","name":"isManual","parent":{"fileName":"northlight/node_modules/@chakra-ui/tabs/dist/use-tabs.d.ts","name":"UseTabsProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/tabs/dist/use-tabs.d.ts","name":"UseTabsProps"}],"required":false,"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"onChange":{"defaultValue":null,"description":"Callback when the index (controlled or un-controlled) changes.","name":"onChange","parent":{"fileName":"northlight/node_modules/@chakra-ui/tabs/dist/use-tabs.d.ts","name":"UseTabsProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/tabs/dist/use-tabs.d.ts","name":"UseTabsProps"}],"required":false,"type":{"name":"(index: number) => void"}},"index":{"defaultValue":null,"description":"The index of the selected tab (in controlled mode)","name":"index","parent":{"fileName":"northlight/node_modules/@chakra-ui/tabs/dist/use-tabs.d.ts","name":"UseTabsProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/tabs/dist/use-tabs.d.ts","name":"UseTabsProps"}],"required":false,"type":{"name":"number"}},"defaultIndex":{"defaultValue":null,"description":"The initial index of the selected tab (in uncontrolled mode)","name":"defaultIndex","parent":{"fileName":"northlight/node_modules/@chakra-ui/tabs/dist/use-tabs.d.ts","name":"UseTabsProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/tabs/dist/use-tabs.d.ts","name":"UseTabsProps"}],"required":false,"type":{"name":"number"}},"id":{"defaultValue":null,"description":"The id of the tab","name":"id","parent":{"fileName":"northlight/node_modules/@chakra-ui/tabs/dist/use-tabs.d.ts","name":"UseTabsProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/tabs/dist/use-tabs.d.ts","name":"UseTabsProps"}],"required":false,"type":{"name":"string"}},"isLazy":{"defaultValue":{"value":"false"},"description":"Performance 🚀:\nIf `true`, rendering of the tab panel's will be deferred until it is selected.","name":"isLazy","parent":{"fileName":"northlight/node_modules/@chakra-ui/tabs/dist/use-tabs.d.ts","name":"UseTabsProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/tabs/dist/use-tabs.d.ts","name":"UseTabsProps"}],"required":false,"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"lazyBehavior":{"defaultValue":{"value":"\"unmount\""},"description":"Performance 🚀:\nThe lazy behavior of tab panels' content when not active.\nOnly works when `isLazy={true}`\n\n- \"unmount\": The content of inactive tab panels are always unmounted.\n- \"keepMounted\": The content of inactive tab panels is initially unmounted,\nbut stays mounted when selected.","name":"lazyBehavior","parent":{"fileName":"northlight/node_modules/@chakra-ui/tabs/dist/use-tabs.d.ts","name":"UseTabsProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/tabs/dist/use-tabs.d.ts","name":"UseTabsProps"}],"required":false,"type":{"name":"enum","raw":"LazyMode","value":[{"value":"\"unmount\""},{"value":"\"keepMounted\""}]}},"direction":{"defaultValue":{"value":"\"ltr\""},"description":"The writing mode direction.\n\n- When in RTL, the left and right navigation is flipped","name":"direction","parent":{"fileName":"northlight/node_modules/@chakra-ui/tabs/dist/use-tabs.d.ts","name":"UseTabsProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/tabs/dist/use-tabs.d.ts","name":"UseTabsProps"}],"required":false,"type":{"name":"enum","raw":"\"ltr\" | \"rtl\"","value":[{"value":"\"ltr\""},{"value":"\"rtl\""}]}},"variant":{"defaultValue":null,"description":"","name":"variant","parent":{"fileName":"northlight/node_modules/@chakra-ui/styled-system/dist/index.d.ts","name":"ThemingProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/styled-system/dist/index.d.ts","name":"ThemingProps"}],"required":false,"type":{"name":"enum","raw":"ResponsiveValue<\"line\" | (string & {}) | \"unstyled\" | \"enclosed\" | \"enclosed-colored\" | \"soft-rounded\" | \"solid-rounded\">","value":[{"value":"\"line\""},{"value":"string & {}"},{"value":"\"unstyled\""},{"value":"\"enclosed\""},{"value":"\"enclosed-colored\""},{"value":"\"soft-rounded\""},{"value":"\"solid-rounded\""},{"value":"ResponsiveArray<\"line\" | (string & {}) | \"unstyled\" | \"enclosed\" | \"enclosed-colored\" | \"soft-rounded\" | \"solid-rounded\">","description":"","fullComment":"","tags":{}},{"value":"Partial<Record<string | (string & {}), \"line\" | (string & {}) | \"unstyled\" | \"enclosed\" | \"enclosed-colored\" | \"soft-rounded\" | \"solid-rounded\">>","description":"","fullComment":"","tags":{}}]}},"size":{"defaultValue":null,"description":"","name":"size","parent":{"fileName":"northlight/node_modules/@chakra-ui/styled-system/dist/index.d.ts","name":"ThemingProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/styled-system/dist/index.d.ts","name":"ThemingProps"}],"required":false,"type":{"name":"enum","raw":"ResponsiveValue<(string & {}) | \"sm\" | \"md\" | \"lg\">","value":[{"value":"string & {}"},{"value":"\"sm\""},{"value":"\"md\""},{"value":"\"lg\""},{"value":"ResponsiveArray<(string & {}) | \"sm\" | \"md\" | \"lg\">","description":"","fullComment":"","tags":{}},{"value":"Partial<Record<string | (string & {}), (string & {}) | \"sm\" | \"md\" | \"lg\">>","description":"","fullComment":"","tags":{}}]}},"colorScheme":{"defaultValue":null,"description":"","name":"colorScheme","parent":{"fileName":"northlight/node_modules/@chakra-ui/styled-system/dist/index.d.ts","name":"ThemingProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/styled-system/dist/index.d.ts","name":"ThemingProps"}],"required":false,"type":{"name":"enum","raw":"(string & {}) | \"blue\" | \"cyan\" | \"gray\" | \"green\" | \"orange\" | \"pink\" | \"purple\" | \"red\" | \"teal\" | \"yellow\" | \"whiteAlpha\" | \"blackAlpha\" | \"linkedin\" | \"facebook\" | \"messenger\" | \"whatsapp\" | \"twitter\" | \"telegram\"","value":[{"value":"string & {}"},{"value":"\"blue\""},{"value":"\"cyan\""},{"value":"\"gray\""},{"value":"\"green\""},{"value":"\"orange\""},{"value":"\"pink\""},{"value":"\"purple\""},{"value":"\"red\""},{"value":"\"teal\""},{"value":"\"yellow\""},{"value":"\"whiteAlpha\""},{"value":"\"blackAlpha\""},{"value":"\"linkedin\""},{"value":"\"facebook\""},{"value":"\"messenger\""},{"value":"\"whatsapp\""},{"value":"\"twitter\""},{"value":"\"telegram\""}]}},"styleConfig":{"defaultValue":null,"description":"","name":"styleConfig","parent":{"fileName":"northlight/node_modules/@chakra-ui/styled-system/dist/index.d.ts","name":"ThemingProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/styled-system/dist/index.d.ts","name":"ThemingProps"}],"required":false,"type":{"name":"Record<string, any>"}},"isFitted":{"defaultValue":{"value":"false"},"description":"If `true`, tabs will stretch to width of the tablist.","name":"isFitted","parent":{"fileName":"northlight/node_modules/@chakra-ui/tabs/dist/tabs.d.ts","name":"TabsOptions"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/tabs/dist/tabs.d.ts","name":"TabsOptions"}],"required":false,"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"align":{"defaultValue":null,"description":"The alignment of the tabs","name":"align","parent":{"fileName":"northlight/node_modules/@chakra-ui/tabs/dist/tabs.d.ts","name":"TabsOptions"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/tabs/dist/tabs.d.ts","name":"TabsOptions"}],"required":false,"type":{"name":"enum","raw":"\"center\" | \"end\" | \"start\"","value":[{"value":"\"center\""},{"value":"\"end\""},{"value":"\"start\""}]}}}}} />
);

export default TabsPage
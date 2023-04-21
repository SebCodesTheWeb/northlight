/* eslint-disable */
import React from 'react'
import ReferencePage from '../../reference-page'


const CarouselPage = () => (
  <ReferencePage data={{"tags":{"see":"{@link https://northlight.dev/reference/carousel}","example":"(Example)\nThe carousel takes up 100% of its parents container width and height.\nIt then renders all children div into a draggable div using framer-motion\n\n(?\n+\nconst Item = ({ name, ...rest }) => (\n<Center color=\"white\" bg=\"teal.500\" rounded=\"md\" w=\"full\" h=\"full\" { ...rest }>\n{ name }\n</Center>\n)\n\nconst MyCarousel = () => (\n<Box h=\"300px\">\n<Carousel>\n<Item name=\"Item 1\" />\n<Item name=\"Item 2\" />\n<Item name=\"Item 3\" />\n</Carousel>\n</Box>\n\n)\n\nrender(<MyCarousel />)\n\n?)\n(Example)\n##Controling the carousel state\nThe carousel takes an **onChange** and value\n(which is the index of the current active element), meaning it can be controlled.\n\n(?\n+\nconst Item = ({ name, ...rest }) => (\n<Center color=\"white\" bg=\"teal.500\" rounded=\"md\" w=\"full\" h=\"full\" { ...rest }>\n{ name }\n</Center>\n)\n\nconst MyCarousel = () => {\nconst [index, setIndex ] = useState(0)\nreturn (\n\n<VStack\nborderColor=\"border.default\"\nborderWidth=\"st.border.width.sm\" borderStyle=\"solid\" p=\"2\" borderRadius=\"st.border.radius.lg\">\n<Box w=\"full\" h=\"sm\">\n<Carousel\nshowArrows={ false }\nshowRadio={ false }\nvalue={ index }\nonChange={ (v) => setIndex(v) }\n>\n<Item name=\"Item 1\" />\n<Item name=\"Item 2\" />\n<Item name=\"Item 3\" />\n</Carousel>\n</Box>\n<FlipButtonGroup\nonChange={ (v) => setIndex(parseInt(v, 10)) }\nvalue={ `${index}` }\nvariant=\"brand\"\n>\n<FlipButton value=\"0\">One</FlipButton>\n<FlipButton value=\"1\">Two</FlipButton>\n<FlipButton value=\"2\">Three</FlipButton>\n</FlipButtonGroup>\n</VStack>\n)\n}\n\nrender(<MyCarousel/>)\n?)\n(You can also hide the default\nnavigational arrows and radio button using <b>showArrows</b> and\n<b>showRadio</b> as in example)"},"filePath":"/Users/orestisrodriguez/Documents/Projects/@mediatool/northlight/framework/lib/components/carousel/carousel.tsx","description":"Easiely one of the fanciest components, horizontal carousel wrapper for anything","displayName":"Carousel","methods":[],"props":{"children":{"defaultValue":null,"description":"","name":"children","parent":{"fileName":"northlight/framework/lib/components/carousel/types.ts","name":"CarouselProps"},"declarations":[{"fileName":"northlight/framework/lib/components/carousel/types.ts","name":"CarouselProps"}],"required":true,"type":{"name":"Element[]"}},"showArrows":{"defaultValue":{"value":"true"},"description":"Whether to show default navigational arrows on sides","name":"showArrows","parent":{"fileName":"northlight/framework/lib/components/carousel/types.ts","name":"CarouselProps"},"declarations":[{"fileName":"northlight/framework/lib/components/carousel/types.ts","name":"CarouselProps"}],"required":false,"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"showRadio":{"defaultValue":{"value":"true"},"description":"Whether to show default navigational radio button on bottom","name":"showRadio","parent":{"fileName":"northlight/framework/lib/components/carousel/types.ts","name":"CarouselProps"},"declarations":[{"fileName":"northlight/framework/lib/components/carousel/types.ts","name":"CarouselProps"}],"required":false,"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"itemWidth":{"defaultValue":{"value":"150"},"description":"This is the width of the container that each seperate child component is rendered within","name":"itemWidth","parent":{"fileName":"northlight/framework/lib/components/carousel/types.ts","name":"CarouselProps"},"declarations":[{"fileName":"northlight/framework/lib/components/carousel/types.ts","name":"CarouselProps"}],"required":false,"type":{"name":"number"}},"itemHeight":{"defaultValue":{"value":"150"},"description":"This is the height of the container that each seperate child component is rendered within","name":"itemHeight","parent":{"fileName":"northlight/framework/lib/components/carousel/types.ts","name":"CarouselProps"},"declarations":[{"fileName":"northlight/framework/lib/components/carousel/types.ts","name":"CarouselProps"}],"required":false,"type":{"name":"number"}},"spacing":{"defaultValue":{"value":"60"},"description":"","name":"spacing","parent":{"fileName":"northlight/framework/lib/components/carousel/types.ts","name":"CarouselProps"},"declarations":[{"fileName":"northlight/framework/lib/components/carousel/types.ts","name":"CarouselProps"}],"required":false,"type":{"name":"number"}},"value":{"defaultValue":null,"description":"A number, representing the index of the number\nthat is currently centered/focused in the carousel","name":"value","parent":{"fileName":"northlight/framework/lib/components/carousel/types.ts","name":"CarouselProps"},"declarations":[{"fileName":"northlight/framework/lib/components/carousel/types.ts","name":"CarouselProps"}],"required":false,"type":{"name":"number"}},"onChange":{"defaultValue":null,"description":"callback function that passes the current centered item in the carousel","name":"onChange","parent":{"fileName":"northlight/framework/lib/components/carousel/types.ts","name":"CarouselProps"},"declarations":[{"fileName":"northlight/framework/lib/components/carousel/types.ts","name":"CarouselProps"}],"required":false,"type":{"name":"(value: number) => void"}},"carouselStyles":{"defaultValue":{"value":"{}"},"description":"Custom styles to apply directly on closes wrapper to children","name":"carouselStyles","parent":{"fileName":"northlight/framework/lib/components/carousel/types.ts","name":"CarouselProps"},"declarations":[{"fileName":"northlight/framework/lib/components/carousel/types.ts","name":"CarouselProps"}],"required":false,"type":{"name":"StackProps"}}}}} />
);

export default CarouselPage
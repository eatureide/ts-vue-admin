import { defineComponent, ref, render } from 'vue'
// const link = 'https://google.com'
// const Foo = defineComponent({
//     props: {
//         msg: {
//             type: String,
//             required: true
//         }
//     },
//     methods: {
//         click() {
//             alert()
//         }
//     },
//     render() {
//         return (
//             <div onClick={this.click}>Test</div>
//         )
//     }
// })

interface PropsType {
    msg: String
}
const Foo = defineComponent({
    setup() {
        const count = ref(0)
        return (props: PropsType) => (
            <div>{count.value}{props.msg}</div>
        )
    }
})

export default Foo
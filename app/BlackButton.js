export default {
    template: `<div class="black side">
            <h3>Team Black</h3>
            <p>{{start}}</p>
            <button @click="addMore" class="btn btn-balck" v-show="start < max">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="#fff"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-plus">
                    <path stroke="none" d="M0 0h24v24H0z" fill="#fff" />
                    <path d="M12 5l0 14" />
                    <path d="M5 12l14 0" />
                </svg>
            </button>
            <span v-show="start >= max" class="max">Max Reached ({{max}})</span>

        </div>`,


    methods: {
        addMore() {            
            if (this.start + this.step > this.max) {
                this.start = this.max
                return

            }
            this.start = this.start + this.step

        }
    },

    props: {
        max: {
            type: Number,
            default: 10
        },
        start: {
            type: Number,
            default: 1
        },
        step: {
            type: Number,
            default: 1
        }
    }
}
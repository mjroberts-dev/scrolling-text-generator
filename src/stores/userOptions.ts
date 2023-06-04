import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {

    // Variables
    const text = ref("")

    // Getters
    const textOutput = computed(() => {
        if(text == "")
            return "Your text here"
        return text
    })

    // Actions
    function setText(value) {
        if(typeof value != "string")
            return
        text = value
    }

    return {
        text, 
        textOutput,
        setText,
    }
})

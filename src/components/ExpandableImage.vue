<template>
    <div
            class="expandable-image"
            :class="{ expanded }"
            @click="expanded = true"
    >
        <i
                v-if="expanded"
                class="close-button"
        >
            <svg
                    style="width:24px;height:24px"
                    viewBox="0 0 24 24"
            >
                <path
                        fill="#666666"
                        d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                />
            </svg>
        </i>
        <i
                v-else
                class="expand-button"
        >
            <svg
                    style="width:24px;height:24px"
                    viewBox="0 0 24 24"
            >
                <path
                        fill="#000000"
                        d="M10,21V19H6.41L10.91,14.5L9.5,13.09L5,17.59V14H3V21H10M14.5,10.91L19,6.41V10H21V3H14V5H17.59L13.09,9.5L14.5,10.91Z"
                />
            </svg>
        </i>
        <g-image src="../assets/images/work1.jpg"
                 class="absolute top-0 left-0 w-full h-full object-cover opacity-50"
        />
    </div>
</template>

<script>
    export default {
        name: "ExpandableImage",
        inheritAttrs: false,
        data() {
            return {
                expanded: false
            }
        },
        watch: {
            expanded (expanded) {
                this.$nextTick(() => {
                    // Run this if when we're expanding the image
                    if (expanded) {
                        // Clone the entire expandable-image element
                        this.cloned = this.$el.cloneNode(true)
                        // Store a reference for the close button
                        this.closeButtonRef = this.cloned.querySelector('.close-button')
                        // Call closeImage when the close button is clicked
                        this.closeButtonRef.addEventListener('click', this.closeImage)
                        // Add the cloned element into <body>
                        document.body.appendChild(this.cloned)
                        // Prevent the page from scrolling
                        document.body.style.overflow = 'hidden'
                        setTimeout(() => {
                            // Show the cloned element
                            this.cloned.style.opacity = 1
                        }, 0)
                    } else {
                        // This section will run when the image is closing        // Hide the expanded image
                        this.cloned.style.opacity = 0
                        setTimeout(() => {
                            // Then, remove the click event listener from the close button
                            this.closeButtonRef.removeEventListener('click', this.closeImage)
                            // Remove the cloned element and the references
                            this.cloned.remove()
                            this.cloned = null
                            this.closeButtonRef = null
                            // Re-enable the scrolling
                            document.body.style.overflow = 'auto'
                        }, 250)
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>

<template>
<div class="overlay">
    <div class="wrapper">
        <svg width="50" height="50" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" fill="none" class="circle" stroke="black" stroke-width="4"
            ></circle>
        </svg>
    </div>
</div>
</template>

<style scoped>
@keyframes circle {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}

svg {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
}

.circle {
    stroke-dasharray: 100;
    stroke: white;
    transform-origin: center center;
    animation-name: circle;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

.overlay {
    background: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
}
</style>
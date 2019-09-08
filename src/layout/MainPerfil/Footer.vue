<template>
    <!-- Footer -->
    <footer class="footer-container ">        
        <div class="container">
            <div class=" text-center ">Desarrollado por <strong>Max Aqquepucho</strong></div>
        </div>
    </footer>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .footer-container {
        background-color: #222222;
        height: 75px;
        display: flex;
        flex-direction: row;
        align-items: center;
        .container {
            div {
                color: white;
                font-size: 14px;
                font-weight: 400;

                strong {
                    font-size: .85rem;
                }
            }

        }
    }
</style>
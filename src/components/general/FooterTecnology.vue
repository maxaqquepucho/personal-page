<template>
    <div class="footer-tec">
        <div class="container ">
            <div class="col">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-4 ">
                        <div class="uno">

                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-4 ">
                        <div class="dos">

                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-4">
                        <div class="tres">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .footer-tec {
        background-color: #262626;
        // height: 300px;
        padding: 100px 0;
        .container {

            @media screen and (min-width: 990px) {
                max-width: 1200px;
            }
        }
    }

    .uno {
        background: rgb(214, 214, 214);
        height: 200px;
    }

    .dos {
        background: rgb(148, 148, 148);
        height: 200px;
    }

    .tres {
        background: rgb(77, 77, 77);
        height: 200px;
    }

    
</style>
<script>
export default {
    name: 'ApprovalTable',
}
</script>

<template>
<!--    <div class="card flex flex-row gap-2 mx-auto relative">-->
<!--        <div class="card-grid lg:w-1/3 md:w-1/3">-->
<!--            <div class="img">-->
<!--                <img class="home-img" src="../../assets/homeimg.png" alt="homeimg">-->
<!--            </div>-->
<!--            <img class="clock" src="../../assets/clock-ring.svg" alt="clock">-->
<!--            <img class="clock-child" src="../../assets/clock.svg" alt="clock">-->
<!--                <div class="subheading">-->
<!--                    Average Unbonding Time-->
<!--                </div>-->
<!--                <div class="heading">-->
<!--                    <div>-->
<!--                        5 minutes-->
<!--                    </div>-->
<!--                </div>-->
<!--        </div>-->
<!--        <div class="w-2/3 table">-->
<!--&lt;!&ndash;            <div class="grid grid-cols-4 gap-4">&ndash;&gt;-->
<!--&lt;!&ndash;                <div class="grid-item grid-header">Unbounding validators</div>&ndash;&gt;-->
<!--&lt;!&ndash;                <div class="grid-item grid-header">&ndash;&gt;-->
<!--&lt;!&ndash;                    Equested @&ndash;&gt;-->
<!--&lt;!&ndash;                    <br>&ndash;&gt;-->
<!--&lt;!&ndash;                    epoch #&ndash;&gt;-->
<!--&lt;!&ndash;                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                <div class="grid-item grid-header">&ndash;&gt;-->
<!--&lt;!&ndash;                    Checkpointed&ndash;&gt;-->
<!--&lt;!&ndash;                    <br>&ndash;&gt;-->
<!--&lt;!&ndash;                    @BTC block&ndash;&gt;-->
<!--&lt;!&ndash;                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                <div class="grid-item grid-header">&ndash;&gt;-->
<!--&lt;!&ndash;                    Approved&ndash;&gt;-->
<!--&lt;!&ndash;                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                <div class="grid-item">A1B2C3D4</div>&ndash;&gt;-->
<!--&lt;!&ndash;                <div class="grid-item">13</div>&ndash;&gt;-->
<!--&lt;!&ndash;                <div class="grid-item">—</div>&ndash;&gt;-->
<!--&lt;!&ndash;                &lt;!&ndash;Dynamic class&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;                <div class="grid-item text-left flex items-center ml-1 not-approved">&ndash;&gt;-->
<!--&lt;!&ndash;                    <img class="p-0 mr-2" src="../../assets/not-approved.svg" alt="x">&ndash;&gt;-->
<!--&lt;!&ndash;                    <span class="text-notApproved p-0">Not approved</span>&ndash;&gt;-->
<!--&lt;!&ndash;                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                <div class="grid-item">E5F6G7H8</div>&ndash;&gt;-->
<!--&lt;!&ndash;                <div class="grid-item">12</div>&ndash;&gt;-->
<!--&lt;!&ndash;                <div class="grid-item">1220</div>&ndash;&gt;-->
<!--&lt;!&ndash;                <div class="grid-item">&ndash;&gt;-->
<!--&lt;!&ndash;                    &lt;!&ndash;Dynamic class&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;                    <div class="grid-item border-0 text-left flex items-center not-approved p-0 ml-1 pending">&ndash;&gt;-->
<!--&lt;!&ndash;                        <img class="p-0 mr-2" src="../../assets/pending.svg" alt="x">&ndash;&gt;-->
<!--&lt;!&ndash;                        <span class="text-pending">Pending</span>&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                <div class="grid-item">I9J0K1L2</div>&ndash;&gt;-->
<!--&lt;!&ndash;                <div class="grid-item">10</div>&ndash;&gt;-->
<!--&lt;!&ndash;                <div class="grid-item">1200</div>&ndash;&gt;-->
<!--&lt;!&ndash;                <div class="grid-item">&ndash;&gt;-->
<!--&lt;!&ndash;                    &lt;!&ndash;Dynamic class&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;                    <div class="grid-item border-0 text-left flex items-center not-approved p-0 ml-1 pending">&ndash;&gt;-->
<!--&lt;!&ndash;                        <img class="p-0 mr-2" src="../../assets/approved.svg" alt="x">&ndash;&gt;-->
<!--&lt;!&ndash;                        <span class="text-approved">Approved</span>&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                </div>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--        </div>-->
<!--    </div>-->


    <div class="card p-2 mx-auto">
        <div class="img-container">
            <img class="home-img" src="../../assets/homeimg.png" alt="homeimg">
            <div class="center-text">
                12321321
            </div>
        </div>
        <div>

            <div class="table-heading flex items-center">
                <div class="w-1/4 table-item">
                    Unbonding
                    validators
                </div>
                <div class="w-1/4 table-item">
                    Equested @
                    <span class="ml-1">epoch #</span>
                </div>
                <div class="w-1/4 table-item">
                    Checkpointed
                    <span class="ml-1">@BTC block</span>
                </div>
                <div class="w-1/4 table-item">
                    Approved
                </div>
            </div>
            <div class="table-content border-bottom flex px-3 pt-2 items-center">
                <div class="w-1/4 item">A1B2C3D4</div>
                <div class="w-1/4 item flex justify-center pr-3">13</div>
                <div class="w-1/4 item flex justify-center pr-3">—</div>
                <div class="w-1/4 item ml-3">
                    <img class="p-0 mr-2" src="../../assets/not-approved.svg" alt="x">
                    <span class="text-notApproved p-0 font-bold">Not approved</span>
                </div>
            </div>
            <div class="table-content border-bottom flex px-3 pt-2 items-center">
                <div class="w-1/4 item">A1B2C3D4</div>
                <div class="w-1/4 item flex justify-center pr-3">13</div>
                <div class="w-1/4 item flex justify-center pr-3">1220</div>
                <div class="w-1/4 item ml-3">
                    <img class="p-0 mr-2" src="../../assets/pending.svg" alt="x">
                    <span class="text-pending p-0 font-bold">Pending</span>
                </div>
            </div>
            <div class="table-content flex px-3 pt-2 items-center">
                <div class="w-1/4 item">A1B2C3D4</div>
                <div class="w-1/4 item flex justify-center pr-3">13</div>
                <div class="w-1/4 item flex justify-center pr-3">1220</div>
                <div class="w-1/4 item ml-3">
                    <img class="p-0 mr-2" src="../../assets/approved.svg" alt="x">
                    <span class="text-approved p-0 font-bold">Approved</span>
                </div>
            </div>
        </div>
    </div>


</template>

<style scoped>






.img-container {
    position: relative;
}

.center-text {
    z-index: 100;
    position: absolute;
    color: white;
    font-size: 24px;
    font-weight: bold;
    left: 150px;
    top: 350px;
}

.home-img {
    position: absolute;
    border-radius: 9px;
    z-index: 1;
    height: 100%;
    left: 0;
    top: 0;
    /*bottom: 8px;*/
    /*left: 8px;*/
}




.card {
    display: grid;
    grid-template-columns: 1fr 2fr;
    max-width: 800px;
    background: #FFFFFF;
    box-shadow: 0 27px 81px rgba(0, 0, 0, 0.3);
    border-radius: 9px;
}

.card-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.table>:not(caption)>*>* {
    padding: 0.5rem 0.5rem;
    border-bottom-width: 0;
}

.table-heading {
    background: rgba(1, 12, 194, 0.05);
    margin: 0 10px;
    padding: 15px;
    font-weight: 900;
    line-height: 16px;
    font-size: 12px;
    color: #212121;
    border-radius: 5px;
}

.table-content {
    margin: 0 10px;
    padding: 15px;
}

.border-bottom {
    border-bottom: 1px solid rgba(0,0,0,0.1);
}

.item {
    display: flex;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #212121;
}


.clock {
    position: relative;
    left: 42%;
    width: 54px;
    height: 54px;
    z-index: 2;
}

.clock-child {
    position: relative;
    left: 120px;
    bottom:43.5px;
    width: 32px;
    height: 32px;
    z-index: 2;
}

.subheading {
    z-index: 3;
    position: absolute;
    top: 108px;
    left: 50px;
    font-weight: 300;
    font-size: 14px;
    color: #f3f3f3;
    line-height: 20px;
}

.heading {
    z-index: 3;
    position: absolute;
    top: 135px;
    left: 57px;
    font-weight: 800;
    font-size: 32px;
    line-height: 29px;
    color: #23A5DC;
}


@media(max-width: 800px) {
    .card {
        display: block;
    }
}

@media(max-width: 520px) {
    .card {
        display: block;
    }
}

</style>

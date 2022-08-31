<script>
export default {
    name: 'ApprovalTable',
}
</script>

<template>
    <div class="card flex flex-row gap-2 mx-auto">
        <div class="w-1/3">
            <img class="home-img" src="../../assets/homeimg.png" alt="homeimg">
            <img src="../../assets/clock.svg" alt="clock">
            <img class="clock" src="../../assets/clock-ring.svg" alt="clock">
            <img class="clock-child" src="../../assets/clock.svg" alt="clock">
            <div class="subheading">
                Average Unbonding Time
            </div>
            <div class="heading z-50">
                5 minutes
            </div>
        </div>
        <div class="w-2/3 table">
            <div class="grid grid-cols-4 gap-4">
                <div class="grid-item grid-header">Unbounding validators</div>
                <div class="grid-item grid-header">
                    Equested @
                    <br>
                    epoch #
                </div>
                <div class="grid-item grid-header">
                    Checkpointed
                    <br>
                    @BTC block
                </div>
                <div class="grid-item grid-header">
                    Approved
                </div>
                <div class="grid-item">A1B2C3D4</div>
                <div class="grid-item">13</div>
                <div class="grid-item">—</div>
                <!--Dynamic class-->
                <div class="grid-item text-left flex items-center ml-1 not-approved">
                    <img class="p-0 mr-2" src="../../assets/not-approved.svg" alt="x">
                    <span class="text-notApproved p-0">Not approved</span>
                </div>
                <div class="grid-item">E5F6G7H8</div>
                <div class="grid-item">12</div>
                <div class="grid-item">1220</div>
                <div class="grid-item">
                    <!--Dynamic class-->
                    <div class="grid-item border-0 text-left flex items-center not-approved p-0 ml-1 pending">
                        <img class="p-0 mr-2" src="../../assets/pending.svg" alt="x">
                        <span class="text-pending">Pending</span>
                    </div>
                </div>
                <div class="grid-item">I9J0K1L2</div>
                <div class="grid-item">10</div>
                <div class="grid-item">1200</div>
                <div class="grid-item">
                    <!--Dynamic class-->
                    <div class="grid-item border-0 text-left flex items-center not-approved p-0 ml-1 pending">
                        <img class="p-0 mr-2" src="../../assets/approved.svg" alt="x">
                        <span class="text-approved">Approved</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    display: flex;
    width: 800px;
    height: 200px;
    background: #FFFFFF;
    box-shadow: 0 27px 81px rgba(0, 0, 0, 0.3);
    border-radius: 9px;
    padding-top: 11px;
    padding-left: 11px;
}

.home-img {
    position: absolute;
    align-items: center;
    border-radius: 9px;
}

.clock {
    position: relative;
    left: 42%;
    width: 54px;
    height: 54px;
}

.clock-child {
    position: relative;
    left: 120px;
    bottom:42.6px;
    width: 32px;
    height: 32px;
}

.grid-item {
    text-align: center;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
}

.grid-header {
    font-weight: 700;
    line-height: 16px;
}
</style>

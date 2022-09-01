<script>
export default {
    name: 'ApprovalTable',
}
</script>

<template>
    <div class="card p-2 mx-auto">
        <div>
            <div>
                <div class="imgcont">
                    <img class="home-img" src="../../assets/homeimg.png" alt="homeimg">
                    <div class="centered">
                        <img class="ring" src="../../assets/clock-ring.svg" alt="ring">
                        <img class="ring" src="../../assets/clock.svg" alt="clock">
                        <div class="subheading">Average Unbonding Time</div>
                        <div class="heading">5 minutes</div>
                    </div>
                </div>
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
                    <br>
                    <span class="ml-2">epoch #</span>
                </div>
                <div class="w-1/4 table-item">
                    Checkpointed
                    <span class="ml-1">@BTC block</span>
                </div>
                <div class="w-1/4 table-item">
                    Approved
                </div>
            </div>
            <div class="table-content border-bottom flex px-3 items-center">
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
            <div class="table-content flex px-3 items-center">
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

.home-img {
    border-radius: 9px;
    z-index: 1000;
}

.imgcont {
    position: relative;
    text-align: center;
}

.centered {
    position: absolute;
    top: 67%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.card {
    display: grid;
    grid-template-columns: 1fr 2fr;
    max-width: 800px;
    background: #FFFFFF;
    box-shadow: 0 27px 81px rgba(0, 0, 0, 0.3);
    border-radius: 9px;
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
    padding: 5px;
    height: 23%;
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

.subheading {
    font-weight: 300;
    width: 200px;
    font-size: 14px;
    color: #f3f3f3;
    line-height: 20px;
}

.heading {
    font-weight: 800;
    font-size: 32px;
    line-height: 29px;
    color: #23A5DC;
}

.ring {
    position: absolute;
    top: -100%;
    left: 50%;
    transform: translate(-50%, -50%);
}


.ring {
    --tw-ring-shadow:  0 0 0 calc(0 + var(--tw-ring-offset-width)) var(--tw-ring-color);
}

@media(max-width: 800px) {
    .card {
        display: none;
    }
}


</style>

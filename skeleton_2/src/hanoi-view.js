class View {
    constructor(game, $el) {
        this.game = game;
        this.$el = $el;

        this.fromTowerIdx = null;
        this.setupTowers();
        this.render();

        this.$el.on('click', 'ul', this.clickTower(event))

    }

    clickTower(event) {
        const clickTowerIdx = $(event.currentTarget).index();

        if (this.fromTowerIdx === null) {
            this.fromTowerIdx = this.clickTowerIdx;
        } else {
            if (!this.game.move(this.fromTowerIdx, clickTowerIdx)) {
            alert('Invalid move!');
            this.fromTowerIdx = null;
            }
        }
            
    }

    setupTowers() {
        this.$el.empty();

        for (let i = 0; i < 3; i++) {
            let $tower = $('<ul>');
            for (let j = 0; j < 3; j++) {
                let $disk = $('<li>');
                $tower.append($disk);
            }
            return this.$el.append($tower);
        }
    }
    
    render() {
        const $towers = this.$el.find('ul');
        $towers.removeClass();

        if (this.fromTowerIdx != null) {
            $towers.eq(this.fromTowerIdx).addClass('chosen')
        }
        
        this.game.towers.forEach((disks, towerIdx) => {
            const $disks = $towers.eq(towerIdx).children();
            $disks.removeClass();
            disks.forEach((diskSize, diskIdx)  => {
                $disks.eq(-1 * diskIdx).addClass(`diskSize-${diskSize}`)
            });
        })
    }
}

module.exports = HanoiView;
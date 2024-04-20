const INDENT = 20;
const OFFSET = 3;
const TREE_OFFSET = 10;
const SIZE_X = 340;
const SIZE_Y = 136;
const SIZE_Y_FOCUSED = 250;
const SCROLLBAR_WIDTH = 20;
const Z_INDEX = 800;
const CO_LIST = {
    "andy":{"co_name":"Andy","co_id":"1"},
    "grit":{"co_name":"Grit","co_id":"2"},
    "kanbei":{"co_name":"Kanbei","co_id":"3"},
    "drake":{"co_name":"Drake","co_id":"5"},
    "max":{"co_name":"Max","co_id":"7"},
    "sami":{"co_name":"Sami","co_id":"8"},
    "olaf":{"co_name":"Olaf","co_id":"9"},
    "eagle":{"co_name":"Eagle","co_id":"10"},
    "adder":{"co_name":"Adder","co_id":"11"},
    "hawke":{"co_name":"Hawke","co_id":"12"},
    "sensei":{"co_name":"Sensei","co_id":"13"},
    "jess":{"co_name":"Jess","co_id":"14"},
    "colin":{"co_name":"Colin","co_id":"15"},
    "lash":{"co_name":"Lash","co_id":"16"},
    "hachi":{"co_name":"Hachi","co_id":"17"},
    "sonja":{"co_name":"Sonja","co_id":"18"},
    "sasha":{"co_name":"Sasha","co_id":"19"},
    "grimm":{"co_name":"Grimm","co_id":"20"},
    "koal":{"co_name":"Koal","co_id":"21"},
    "jake":{"co_name":"Jake","co_id":"22"},
    "kindle":{"co_name":"Kindle","co_id":"23"},
    "nell":{"co_name":"Nell","co_id":"24"},
    "flak":{"co_name":"Flak","co_id":"25"},
    "jugger":{"co_name":"Jugger","co_id":"26"},
    "javier":{"co_name":"Javier","co_id":"27"},
    "rachel":{"co_name":"Rachel","co_id":"28"},
    "sturm":{"co_name":"Sturm","co_id":"29"},
    "vonbolt":{"co_name":"VonBolt","co_id":"30"}
};
const TERRAIN_LIST = {
    "plain": {"terrain_name":"Plain","terrain_id":"1","terrain_defense":"1"},
    "mountain": {"terrain_name":"Mountain","terrain_id":"2","terrain_defense":"4"},
    "wood": {"terrain_name":"Wood","terrain_id":"3","terrain_defense":"2"},
    "hriver": {"terrain_name":"HRiver","terrain_id":"4","terrain_defense":"0"},
    "hroad": {"terrain_name":"HRoad","terrain_id":"15","terrain_defense":"0"},
    "hbridge": {"terrain_name":"HBridge","terrain_id":"26","terrain_defense":"0"},
    "sea": {"terrain_name":"Sea","terrain_id":"28","terrain_defense":"0"},
    "hshoal": {"terrain_name":"HShoal","terrain_id":"29","terrain_defense":"0"},
    "reef": {"terrain_name":"Reef","terrain_id":"33","terrain_defense":"1"},
    "city": {"terrain_name":"?City","terrain_id":"34","terrain_defense":"3"},
    "base": {"terrain_name":"?Base","terrain_id":"35","terrain_defense":"3"},
    "airport": {"terrain_name":"?Airport","terrain_id":"36","terrain_defense":"3"},
    "port": {"terrain_name":"?Port","terrain_id":"37","terrain_defense":"3"},
    "comtower": {"terrain_name":"?ComTower","terrain_id":"133","terrain_defense":"3"},
    "lab": {"terrain_name":"?Lab","terrain_id":"145","terrain_defense":"3"},
    "hq": {"terrain_name":"?HQ","terrain_id":"42","terrain_defense":"4"}
};
const UNIT_LIST = {
    "infantry": {"units_name":"Infantry","units_id":"1","units_ammo":"0"},
    "mech": {"units_name":"Mech","units_id":"2","units_ammo":"3"},
    "md.tank": {"units_name":"Md.Tank","units_id":"3","units_ammo":"8"},
    "tank": {"units_name":"Tank","units_id":"4","units_ammo":"9"},
    "recon": {"units_name":"Recon","units_id":"5","units_ammo":"0"},
    "apc": {"units_name":"APC","units_id":"6","units_ammo":"0"},
    "artillery": {"units_name":"Artillery","units_id":"7","units_ammo":"9"},
    "rocket": {"units_name":"Rocket","units_id":"8","units_ammo":"6"},
    "anti-air": {"units_name":"Anti-Air","units_id":"9","units_ammo":"9"},
    "missile": {"units_name":"Missile","units_id":"10","units_ammo":"6"},
    "fighter": {"units_name":"Fighter","units_id":"11","units_ammo":"9"},
    "bomber": {"units_name":"Bomber","units_id":"12","units_ammo":"9"},
    "b-copter": {"units_name":"B-Copter","units_id":"13","units_ammo":"6"},
    "t-copter": {"units_name":"T-Copter","units_id":"14","units_ammo":"0"},
    "battleship": {"units_name":"Battleship","units_id":"15","units_ammo":"9"},
    "cruiser": {"units_name":"Cruiser","units_id":"16","units_ammo":"9"},
    "lander": {"units_name":"Lander","units_id":"17","units_ammo":"0"},
    "sub": {"units_name":"Sub","units_id":"18","units_ammo":"6"},
    "neotank": {"units_name":"Neotank","units_id":"46","units_ammo":"9"},
    "piperunner": {"units_name":"Piperunner","units_id":"960900","units_ammo":"9"},
    "blackbomb": {"units_name":"BlackBomb","units_id":"968731","units_ammo":"0"},
    "megatank": {"units_name":"MegaTank","units_id":"1141438","units_ammo":"3"},
    "blackboat": {"units_name":"BlackBoat","units_id":"28","units_ammo":"0"},
    "stealth": {"units_name":"Stealth","units_id":"30","units_ammo":"6"},
    "carrier": {"units_name":"Carrier","units_id":"29","units_ammo":"9"}
};
const DEFAULT_ATTACKER = {
    "cities": 0,
    "co": {"co_name": "Andy", "co_id": 1},
    "country": {"code": "os", "name": "orangestar"},
    "funds": 0,
    "hp": 10,
    "power": "N",
    "terrain": {"terrain_name": "Plain", "terrain_id": 1, "terrain_defense": 1},
    "towers": 0,
    "unit": {"units_ammo": 0, "units_name": "Infantry", "units_id": 1}
};
const DEFAULT_DEFENDER = {
    "cities": 0,
    "co": {"co_name": "Andy", "co_id": 1},
    "country": {"code": "bm", "name": "bluemoon"},
    "funds": 0,
    "hp": 10,
    "power": "N",
    "terrain": {"terrain_name": "Plain", "terrain_id": 1, "terrain_defense": 1},
    "towers": 0,
    "unit": {"units_ammo": 0, "units_name": "Infantry", "units_id": 1}
};

/////////////////////////////////////////////////////
// CalcNode                                        // 
/////////////////////////////////////////////////////
class CalcNode {
    constructor(attacker, defender, id) {
        this.attacker = attacker;
        this.defender = defender;
        this.children = [];
        this.isFocused = true;
        this.x = 1;
        this.y = 1;
        this.width = 0;
        this.height = 0;
        this.parent = null; //set by add funct
        this.id = id;
        this.depth = 0; // set by add funct

        this.attackerNoAmmoToggled = false;
        this.defenderNoAmmoToggled = false;
        this.attackerAmmo = this.attacker.unit.units_ammo;
        this.defenderAmmo = this.defender.unit.units_ammo;
        this.attackerDisplayHP = this.attacker['hp']*10;
        this.defenderDisplayHP = this.defender['hp']*10;
        this.defenderMaxHP = 100;
        this.defenderMaxCities = 99;
        this.defenderMaxTowers = 99;
        this.isValid = true;
        this.selectingAttacker = false;
        this.selectingDefender = false;
        this.calcResults = {
            'attackDamageMin': '',
            'attackDamageMax': '',
            'attackFundsMin': '',
            'attackFundsMax': '',

            'minCounterDamageMin': '',
            'minCounterDamageMax': '',
            'maxCounterDamageMin': '',
            'maxCounterDamageMax': '',

            'minCounterFundsMin': '', //display
            'minCounterFundsMax': '',
            'maxCounterFundsMin': '',
            'maxCounterFundsMax': ''  //display
        };
    }

    //return offset based on index
    getOffsetY() {
        let index = 0;
        let result = 0;
        if (this.parent !== null) {
            for (let i = 0; i < this.parent.children.length; i++) {
                if (this.id === this.parent.children[i].id) {
                    index = i;
                    break;
                }
            }
            result = index * OFFSET + this.parent.getOffsetY();
        }
        return result;
    }

    //return offset based on depth
    getOffsetX() {
        return this.depth * OFFSET;
    }

    //return max depth
    getMaxDepth() {
        let max = this.depth;
        this.children.forEach(child => {
            max = Math.max(max, child.getMaxDepth());
        });
        return max;
    }

    setFocus(focus) {
        this.isFocused = focus;
        if (this.parent !== null) {
            this.parent.setFocus(focus);
        }
    }

    removeFocus() {
        this.isFocused = false;
        this.children.forEach(child => {
            child.removeFocus(true);
        });
    }

    getRoot() {
        if (this.parent === null) {
            return this;
        } else {
            return this.parent.getRoot();
        }
    }

    add(child) {
        child.parent = this;
        child.depth = this.depth + 1;
        child.index = this.children.length;
        this.getRoot().removeFocus();
        child.setFocus(true);
        this.children.push(child);
    }

    size() {
        this.width = SIZE_X;
        this.height = (this.children.length-1)*OFFSET;
        this.children.forEach(child => {
            child.size();
            this.height += child.height;
        });
        if (this.isFocused === true) {
            this.height = (this.height < SIZE_Y_FOCUSED) ? SIZE_Y_FOCUSED : this.height;
        } else {
            this.height = (this.height < SIZE_Y) ? SIZE_Y : this.height;
        }
    }

    adjust(x, y) {
        this.x = x;
        this.y = y;
        let childX = x + this.width;
        let childY = y;
        this.children.forEach(child => {
            child.adjust(childX, childY);
            childY += child.height;
        });
    }

    orient(x, y) {
        if (this.parent !== null) {
            this.parent.orient(x, y);
        } else {
            this.size();
            this.adjust(x, y);
        }
    }

    getNodePolygon() {
        let poly = "";
        // top left
        let p = [1, 1];
        poly += p[0] + "," + p[1] + " ";
        // top right
        p = [this.width, 1];
        poly += p[0] + "," + p[1] + " ";
        let offset = 0;
        this.children.forEach(child => {
            offset = child.index*OFFSET;
            // top left child
            p = [child.x - this.x, child.y - this.y + offset+1];
            poly += p[0] + "," + p[1] + " ";
            // indent center
            p = [child.x - this.x + INDENT, child.y - this.y + INDENT + offset+1];
            poly += p[0] + "," + p[1] + " ";
            // indent bottom
            p = [child.x - this.x, child.y - this.y + 2 * INDENT + offset+1];
            poly += p[0] + "," + p[1] + " ";
        });
        // bottom right
        p = [this.width, this.height];
        poly += p[0] + "," + p[1] + " ";
        // bottom left
        p = [1, this.height];
        poly += p[0] + "," + p[1] + " ";
        if (this.depth !== 0) {
            // indent bottom
            p = [1, (2 * INDENT)+1];
            poly += p[0] + "," + p[1] + " ";
            // indent center
            p = [INDENT+1, INDENT+1];
            poly += p[0] + "," + p[1];
        }

        return poly;
    }

    getAttackerPolygon() {
        let poly = "";
        let p = [];
        if (this.parent === null) {
            // top left
            p = [2, 2];
            poly += p[0] + "," + p[1] + " ";
        } else {
            // top left
            p = [3, 2];
            poly += p[0] + "," + p[1] + " ";
        }

        // top right
        p = [this.width/2, 2];
        poly += p[0] + "," + p[1] + " ";
        // bottom right
        p = [this.width/2, INDENT*2];
        poly += p[0] + "," + p[1] + " ";
        if (this.parent === null) {
            // bottom left
            p = [2, INDENT*2];
            poly += p[0] + "," + p[1] + " ";
        } else {
            // bottom left
            p = [3, INDENT*2];
            poly += p[0] + "," + p[1] + " ";
        }

        if (this.depth !== 0) {
            // indent center
            p = [INDENT+2, INDENT+1];
            poly += p[0] + "," + p[1];
        }
        return poly;
    }

    getDefenderPolygon() {
        let poly = "";
        // top left
        let p = [this.width/2+1, 2];
        poly += p[0] + "," + p[1] + " ";
        if (this.children.length === 0) {
            // top right
            p = [this.width-1, 2];
            poly += p[0] + "," + p[1] + " ";
        } else {
            // top right
            p = [this.width, 2];
            poly += p[0] + "," + p[1] + " ";
        }
        if (this.children.length !== 0) {
            // indent center
            p = [this.width + INDENT-1, INDENT+1];
            poly += p[0] + "," + p[1] + " ";
        } 
        if (this.children.length === 0) {
            // bottom right
            p = [this.width-1, INDENT*2];
            poly += p[0] + "," + p[1] + " ";
        } else {
            // bottom right
            p = [this.width, INDENT*2];
            poly += p[0] + "," + p[1] + " ";
        }
        // bottom left
        p = [this.width/2+1, INDENT*2];
        poly += p[0] + "," + p[1] + " ";
        return poly;
    }
    
    generateHTML(safeModeOn) {
        const variableStyle = (!this.isValid) ? 'calc-plus-invalid' : (this.isFocused) ? 'calc-plus-focused' : 'calc-plus-unfocused'; 
        let optionsHtml = `
        <div class="calc-plus-node-ctrls">
            ${'<div class="calc-plus-ctrls calc-plus-ctrls-del ' + variableStyle +'" title="Delete"><img src="' + chrome.runtime.getURL('/images/delete_icon.png') + '"></div>'}
            ${(this.defenderDisplayHP - this.calcResults['attackDamageMin'] > 0) ? '<div class="calc-plus-ctrls calc-plus-ctrls-add ' + variableStyle + '" title="Add Attack"><img src="' + chrome.runtime.getURL('/images/add_icon.png') + '"></div>' : ''}
        </div>
        `;

        let attackerCountry = '';
        if (this.attacker['terrain']['terrain_name'].includes('?')) {
            attackerCountry = this.attacker['country']['name'].toLowerCase();
        }

        let defenderCountry = '';
        if (this.defender['terrain']['terrain_name'].includes('?')) {
            defenderCountry = this.defender['country']['name'].toLowerCase();
        }

        const atRoot = this.id === this.getRoot().id;
        let headerHtml = '';
        let resultsHtml = '';
        let displayHtml = '';
        if (this.isFocused) {
            headerHtml = `
                <div class="calc-plus-node-headers ${variableStyle}" style="height: ${INDENT*2}px;">
                    <div style="display: flex; flex-direction: column; width: 50%">
                        <span>Attacker</span>
                        <span class="calc-plus-select-attacker ${this.selectingAttacker ? 'clicked' : ''}"> [Select] </span>
                    </div>
                    <div style="display: flex; flex-direction: column; width: 50%">
                        <span>Defender</span>
                        ${atRoot ? '<span class="calc-plus-select-defender ' + (this.selectingDefender ? 'clicked' : '') + '"> [Select] </span>' : ''}
                    </div>
                </div>
            `;
            const attckerNoSecondary = this.attacker.unit.units_name === 'Infantry' || this.attacker.unit.units_name === 'Recon' || this.attacker.unit.units_name === 'APC' ||this.attacker.unit.units_name === 'T-Copter' || this.attacker.unit.units_name === 'Lander'|| this.attacker.unit.units_name === 'BlackBomb' || this.attacker.unit.units_name === 'BlackBoat';
            let attackerHtml = `
            <div class="calculator-attack" style="justify-content: flex-start; align-content: flex-start; width: ${this.width/2-3}px;">
                <div class="co-options" id="calc-plus-options">
                    <div class="co option">
                        <div class="selected-co ${safeModeOn && !atRoot ? 'calc-plus-locked' : ''}">
                            <img src="terrain/aw2/ds${this.attacker['co']['co_name'].toLowerCase()}.png?v=1" class="border co_portrait">
                        </div>
                    </div>
                </div>
                <div class="unit-options" id="calc-plus-options">
                    <div class="unit option">
                        <div class="selected-unit border">
                            <img src="terrain/ani/${this.attacker['country']['code']}${this.attacker['unit']['units_name'].toLowerCase()}.gif">
                            ${(this.attacker['hp'] < 1 || this.attacker['hp'] > 9 || isNaN(parseInt(this.attacker['hp']))) ? '' : '<img src="terrain/aw2/' + this.attacker['hp'] + '.gif" class="hp-display">'}
                        </div>
                    </div>
                    <div class="hp-options" id="calc-plus-options">
                        <img src="terrain/hp.gif" title="True HP value from 1-100. Atk and Def modifiers are calculated using the Display HP of the unit.\nThe damage a unit takes is subtracted from the True HP.">
                        <input type="number" max="100" min="1" style="width: 40px;" value="${this.attackerDisplayHP}" class="text-input hp-input">
                    </div>
                </div>
                <div class="terrain-options" id="calc-plus-options">
                    <div class="terrain option">
                        <img src="terrain/aw2/${attackerCountry+this.attacker['terrain']['terrain_name'].toLowerCase().replaceAll(' ', '').replaceAll('?', '')}.gif" class="selected-terrain">
                        <div class="terrain-stars">
                            <img src="terrain/terrainstar.gif">
                            <p>${(this.attacker.co.co_name === 'Lash' && this.attacker.power === 'S') ? this.attacker['terrain']['terrain_defense'] * 2 : this.attacker['terrain']['terrain_defense']}</p>
                        </div>
                    </div>
                </div> 
                <div>
                    <div class="power-options ${safeModeOn && !atRoot && this.parent.attacker['power'] !== 'N' ? 'calc-plus-locked' : ''}" id="calc-plus-options" style="flex-direction: column; width: 57px">
                        <div class="option" style="margin: 0px 0px;">
                            <img src="terrain/aw2/redstar.gif" ${((this.attacker['power'] === 'Y') ? 'id="calc-plus-blue-border"' : '') + 'class="toggle-cop"'}> 
                            <img src="terrain/aw2/bluestar.gif" ${((this.attacker['power'] === 'S') ? 'id="calc-plus-blue-border"' : '') + 'class="toggle-scop"'}>
                        </div>
                    </div> 
                    <div class="ammo-options" id="calc-plus-ammo-options"${attckerNoSecondary ? 'style="visibility: hidden;"' : ''}>
                        <div class="option">
                            <span class="red-border-strikethru" ${this.attackerNoAmmoToggled ? '' : 'style="display: none;"'}></span>
                            <img src="terrain/ammo_button.gif" ${this.attackerNoAmmoToggled ? 'class="red-border"' : ''}>
                        </div>
                    </div>
                </div>
                <div class="misc-options" id="calc-plus-options" style="width: 98px;">
                    <div class="city-options" id="calc-plus-city-options">
                        <img src="terrain/capt.gif"> 
                        <input type="number" max="99" min="0" style="width: 30px;" value="${this.attacker['cities']}" class="text-input city-input">
                    </div> 
                    <div class="tower-options" id="calc-plus-tower-options">
                        <img src="terrain/aw2/commtowericon.gif"> 
                        <input type="number" max="99" min="0" style="width: 30px;" value="${this.attacker['towers']}" class="text-input tower-input">
                    </div> 
                    <div class="fund-options" id="calc-plus-fund-options">
                        <img src="terrain/coin.gif" class="coin"> 
                        <input type="number" min="0" step="1000" value="${this.attacker['funds']}" class="text-input funds-input">
                    </div>
                </div>
            </div>
            `;
            const defenderNoSecondary = this.defender.unit.units_name === 'Infantry' || this.defender.unit.units_name === 'Recon' || this.defender.unit.units_name === 'APC' ||this.defender.unit.units_name === 'T-Copter' || this.defender.unit.units_name === 'Lander'|| this.defender.unit.units_name === 'BlackBomb' || this.defender.unit.units_name === 'BlackBoat';
            let defenderHtml = `
            <div class="calculator-defend" style="justify-content: flex-start; align-content: flex-start; width: ${this.width/2-3}px;">
                <div class="co-options" id="calc-plus-options">
                    <div class="co option">
                        <div class="selected-co ${safeModeOn && !atRoot ? 'calc-plus-locked' : ''}">
                            <img src="terrain/aw2/ds${this.defender['co']['co_name'].toLowerCase()}.png?v=1" class="border co_portrait">
                        </div>
                    </div>
                </div>
                <div class="unit-options" id="calc-plus-options">
                    <div class="unit option">
                        <div class="selected-unit border ${safeModeOn && !atRoot ? 'calc-plus-locked' : ''}">
                            <img src="terrain/ani/${this.defender['country']['code']}${this.defender['unit']['units_name'].toLowerCase()}.gif">
                            ${(this.defender['hp'] < 1 || this.defender['hp'] > 9) ? '' : '<img src="terrain/aw2/' + this.defender['hp'] + '.gif" class="hp-display">'}
                        </div>
                    </div>
                    <div class="hp-options" id="calc-plus-options">
                        <img src="terrain/hp.gif" title="True HP value from 1-100. Atk and Def modifiers are calculated using the Display HP of the unit.\nThe damage a unit takes is subtracted from the True HP.">
                        <input type="number" max="${this.defenderMaxHP}" min="1" style="width: 40px;" value="${this.defenderDisplayHP}" class="text-input hp-input">
                    </div>
                </div>
                <div class="terrain-options" id="calc-plus-options">
                    <div class="terrain option ${safeModeOn && !atRoot ? 'calc-plus-locked' : ''}">
                        <img src="terrain/aw2/${defenderCountry+this.defender['terrain']['terrain_name'].toLowerCase().replaceAll(' ', '').replaceAll('?', '')}.gif" class="selected-terrain">
                        <div class="terrain-stars">
                            <img src="terrain/terrainstar.gif">
                            <p>${(this.defender.co.co_name === 'Lash' && this.defender.power === 'S') ? this.defender['terrain']['terrain_defense'] * 2 : this.defender['terrain']['terrain_defense']}</p>
                        </div>
                    </div>
                </div> 
                <div>
                    <div class="power-options ${safeModeOn && !atRoot ? 'calc-plus-locked' : ''}" id="calc-plus-options" style="flex-direction: column; width: 57px">
                        <div class="option" style="margin: 0px 0px;">
                            <img src="terrain/aw2/redstar.gif" ${((this.defender['power'] === 'Y') ? 'id="calc-plus-blue-border"' : '') + 'class="toggle-cop"'}> 
                            <img src="terrain/aw2/bluestar.gif" ${((this.defender['power'] === 'S') ? 'id="calc-plus-blue-border"' : '') + 'class="toggle-scop"'}>
                        </div>
                    </div> 
                    <div class="ammo-options" id="calc-plus-ammo-options"${defenderNoSecondary ? 'style="visibility: hidden;"' : ''}>
                        <div class="option ${(safeModeOn && !atRoot && this.parent.defenderNoAmmoToggled) ? 'calc-plus-locked' : ''}">
                            <span class="red-border-strikethru ${(safeModeOn && !atRoot && this.parent.defenderNoAmmoToggled) ? 'calc-plus-locked' : ''}" ${this.defenderNoAmmoToggled ? '' : 'style="display: none;"'}></span>
                            <img src="terrain/ammo_button.gif" ${this.defenderNoAmmoToggled ? 'class="red-border ' + ((safeModeOn && !atRoot && this.parent.defenderNoAmmoToggled) ? 'calc-plus-locked' : '') + '"' : ''}>
                        </div>
                    </div>
                </div>
                <div class="misc-options" id="calc-plus-options" style="width: 98px;">
                    <div class="city-options" id="calc-plus-city-options">
                        <img src="terrain/capt.gif"> 
                        <input type="number" max="${this.defenderMaxCities}" min="0" style="width: 30px;" value="${this.defender['cities']}" class="text-input city-input">
                    </div> 
                    <div class="tower-options" id="calc-plus-tower-options">
                        <img src="terrain/aw2/commtowericon.gif"> 
                        <input type="number" max="${this.defenderMaxTowers}" min="0" style="width: 30px;" value="${this.defender['towers']}" class="text-input tower-input">
                    </div> 
                    <div class="fund-options" id="calc-plus-fund-options">
                        <img src="terrain/coin.gif" class="coin"> 
                        <input type="number" min="0" step="1000" value="${this.defender['funds']}" class="text-input funds-input">
                    </div>
                </div>
            </div>
            `;
            displayHtml = `${attackerHtml}
                           ${defenderHtml}`;
            resultsHtml = `
            <div class="calc-plus-results">
                <div class="calculator-damage">
                    <div class="attacker-damage">
                        <img src="terrain/fire.gif" class="fire"> 
                        <span>${this.calcResults['attackDamageMin'] === this.calcResults['attackDamageMax'] ? this.calcResults['attackDamageMax'] + '%' : this.calcResults['attackDamageMin'] + '% - ' + this.calcResults['attackDamageMax'] + '%'}</span> 
                        <img src="terrain/coin.gif" class="gold-coin"> 
                        <span class="funds-damage-display">${this.calcResults['attackFundsMin'] === this.calcResults['attackFundsMax'] ? this.calcResults['attackFundsMin'] : this.calcResults['attackFundsMin'] + ' - ' + this.calcResults['attackFundsMax']}</span>
                    </div> 
                    <div class="defender-damage">
                        <img src="terrain/fire.gif" class="fire">
                        <span><span class="bold">@${Math.max(0, Math.ceil((this.defenderDisplayHP - this.calcResults['attackDamageMax'])/10.0))}HP: </span>${this.calcResults['minCounterDamageMin'] === this.calcResults['minCounterDamageMax'] ? 
                        this.calcResults['minCounterDamageMin'] + '%' : this.calcResults['minCounterDamageMin'] + '% - ' + this.calcResults['minCounterDamageMax'] + '%'}</span>
                        ${Math.max(0, Math.ceil((this.defenderDisplayHP - this.calcResults['attackDamageMax'])/10.0)) === Math.max(0, Math.ceil((this.defenderDisplayHP - this.calcResults['attackDamageMin'])/10.0)) ?
                            '' : '<span><span class="bold">@' + Math.max(0, Math.ceil((this.defenderDisplayHP - this.calcResults['attackDamageMin'])/10.0)) + 'HP: </span>' + ((this.calcResults['maxCounterDamageMin'] === this.calcResults['maxCounterDamageMax']) ? 
                            this.calcResults['maxCounterDamageMin'] + '%' : this.calcResults['maxCounterDamageMin'] + '% - ' + this.calcResults['maxCounterDamageMax'] + '%') + '</span>'}
                        <img src="terrain/coin.gif" class="gold-coin">
                        <span class="funds-damage-display">${this.calcResults['minCounterFundsMin'] === this.calcResults['maxCounterFundsMax'] ? this.calcResults['minCounterFundsMin'] : this.calcResults['minCounterFundsMin'] + ' - ' + this.calcResults['maxCounterFundsMax']}</span>
                    </div>
                </div>
            </div>
            `;
        } else {
            headerHtml = `
            <div class="calc-plus-node-headers ${variableStyle}" style="height: ${INDENT*2}px;">
                <div style="display: flex; flex-direction: column; width: 50%">
                    <span>Attacker</span>
                </div>
                <div style="display: flex; flex-direction: column; width: 50%">
                    <span>Defender</span>
                </div>
            </div>
            `;
            displayHtml = `
                <div class="calc-plus-summary-display">
                    <div class="calc-plus-summary-attack ${variableStyle}">
                        <div class="calc-plus-summary-info">
                            <span>
                                <img src="terrain/aw2/commtowericon.gif">
                                ${this.attacker.towers}
                            </span>
                            <span>
                                <img src="terrain/capt.gif">
                                ${this.attacker.cities}
                            </span>
                            <span>
                                <img src="terrain/coin.gif" class="coin">
                                ${this.attacker.funds}
                            </span>
                        </div>
                        <div class="calc-plus-summary-image ${variableStyle}">
                            <img src="terrain/aw2/ds${this.attacker['co']['co_name'].toLowerCase()}.png?v=1" style="width: 34px">
                        </div>
                        <div class="calc-plus-summary-image ${variableStyle}" ${this.attacker.power === 'N' ? 'style="display: none;"' : 'style="border: none;"'}>
                            ${this.attacker.power === 'Y' ? '<img src="terrain/aw2/redstar.gif" style="width: 23px">' : 
                            (this.attacker.power === 'S' ? '<img src="terrain/aw2/bluestar.gif" style="width: 23px">' : '')}
                        </div>
                        <div class="calc-plus-summary-image ${variableStyle}">
                            <img src="terrain/aw2/${attackerCountry+this.attacker['terrain']['terrain_name'].toLowerCase().replaceAll(' ', '').replaceAll('?', '')}.gif" style="z-index: 0; width: 24px">
                            <img src="terrain/ani/${this.attacker['country']['code']}${this.attacker['unit']['units_name'].toLowerCase()}.gif" style="z-index: 1; width: 24px; position: absolute;">
                            ${(this.attacker['hp'] < 1 || this.attacker['hp'] > 9) ? '' : '<img src="terrain/aw2/' + this.attacker['hp'] + '.gif" style="width: 12px; z-index: 2; position: absolute; bottom: 0; right: 0;">'}
                        </div>
                    </div>

                    <div class="calc-plus-summary-defend ${variableStyle}">
                        <div class="calc-plus-summary-info">
                            <span>
                                <img src="terrain/aw2/commtowericon.gif">
                                ${this.defender.towers}
                            </span>
                            <span>
                                <img src="terrain/capt.gif">
                                ${this.defender.cities}
                            </span>
                            <span>
                                <img src="terrain/coin.gif" class="coin">
                                ${this.defender.funds}
                            </span>
                        </div>
                        <div class="calc-plus-summary-image ${variableStyle}">
                            <img src="terrain/aw2/ds${this.defender['co']['co_name'].toLowerCase()}.png?v=1" style="width: 34px">
                        </div>
                        <div class="calc-plus-summary-image ${variableStyle}" ${this.defender.power === 'N' ? 'style="display: none;"' : 'style="border: none;"'}>
                            ${this.defender.power === 'Y' ? '<img src="terrain/aw2/redstar.gif" style="width: 23px">' : 
                            (this.defender.power === 'S' ? '<img src="terrain/aw2/bluestar.gif" style="width: 23px">' : '')}
                        </div>
                        <div class="calc-plus-summary-image ${variableStyle}">
                            <img src="terrain/aw2/${defenderCountry+this.defender['terrain']['terrain_name'].toLowerCase().replaceAll(' ', '').replaceAll('?', '')}.gif" style="z-index: 0; width: 24px">
                            <img src="terrain/ani/${this.defender['country']['code']}${this.defender['unit']['units_name'].toLowerCase()}.gif" style="z-index: 1; width: 24px; position: absolute;">
                            ${(this.defender['hp'] < 1 || this.defender['hp'] > 9) ? '' : '<img src="terrain/aw2/' + this.defender['hp'] + '.gif" style="width: 12px; z-index: 2; position: absolute; bottom: 0; right: 0;">'}
                        </div>
                    </div>
                </div>
            `;
            resultsHtml = `
            <div class="calc-plus-results">
                <div class="calculator-damage">
                    <div class="attacker-damage" style="justify-content: center;">
                        <span>${this.calcResults['attackDamageMin'] === this.calcResults['attackDamageMax'] ? this.calcResults['attackDamageMax'] + '%' : this.calcResults['attackDamageMin'] + '% - ' + this.calcResults['attackDamageMax'] + '%'}</span> 
                    </div> 
                    <div class="defender-damage" style="justify-content: center;">
                        <span><span class="bold">@${Math.max(0, Math.ceil((this.defenderDisplayHP - this.calcResults['attackDamageMax'])/10.0))}HP: </span>${this.calcResults['minCounterDamageMin'] === this.calcResults['minCounterDamageMax'] ? 
                        this.calcResults['minCounterDamageMin'] + '%' : this.calcResults['minCounterDamageMin'] + '% - ' + this.calcResults['minCounterDamageMax'] + '%'}</span>
                        ${Math.max(0, Math.ceil((this.defenderDisplayHP - this.calcResults['attackDamageMax'])/10.0)) === Math.max(0, Math.ceil((this.defenderDisplayHP - this.calcResults['attackDamageMin'])/10.0)) ?
                            '' : '<span><span class="bold">@' + Math.max(0, Math.ceil((this.defenderDisplayHP - this.calcResults['attackDamageMin'])/10.0)) + 'HP: </span>' + ((this.calcResults['maxCounterDamageMin'] === this.calcResults['maxCounterDamageMax']) ? 
                            this.calcResults['maxCounterDamageMin'] + '%' : this.calcResults['maxCounterDamageMin'] + '% - ' + this.calcResults['maxCounterDamageMax'] + '%') + '</span>'}
                    </div>
                </div>
            </div>
            `;
        }

        return `
        <svg class="calc-plus-node" data-id="${this.id}" style="width: ${this.children === null ? this.width : this.width + INDENT}px; height: ${this.height}px; left: ${this.x + this.getOffsetX()}px; top: ${this.y + this.getOffsetY()}px;">
            <polygon points="${this.getNodePolygon()}" class="calc-plus-poly ${variableStyle}"></polygon>
            <polygon points="${this.getAttackerPolygon()}" class="calc-plus-node-header-poly ${variableStyle}"></polygon>
            <polygon points="${this.getDefenderPolygon()}" class="calc-plus-node-header-poly ${variableStyle}"></polygon>
            <foreignObject position="relative" x="0" y="0" width="${this.width}" height="${this.height}">
                <div class="calc-plus-node-content">
                    ${headerHtml}
                    <div class="calc-plus-main-display"> 
                        ${displayHtml}
                    </div>
                    ${resultsHtml}
                </div>
                ${optionsHtml}
            </foreignObject>
        </svg>
        `;
    }

    delete() {
        //remove from parent
        let index = this.index;
        this.parent.children.splice(index, 1);

        //fix index
        let newIndex = 0;
        this.parent.children.forEach(child => {
            child.index = newIndex;
            newIndex++;
        });

        //delete children
        this.children.forEach(child => {
            child.delete();
        });

        //delete self
        this.self = null;
    }

    //finds node by id, return node
    findNode(id) {
        if (this.id === id) {
            return this;
        } else {
            let foundNode = null;
            this.children.forEach(child => {
                const node = child.findNode(id);
                if (node) {
                    foundNode = node;
                }
            });
            return foundNode;
        }
    }

    getHTML(safeModeOn) {
        try {
            let html = "";
            html += this.generateHTML(safeModeOn);
            
            let focused = "";
            for (const child of this.children) {
                if (child.isFocused === false) {
                    html += child.getHTML(safeModeOn);
                } else {
                    focused += child.getHTML(safeModeOn);
                }
            }

            html += focused;
            return html;
        } catch (error) {
            // Handle the error here if needed
            console.error("Error in getHTML:", error);
        }
    }

    async calculate() {
        //remove ammo if toggled else restore
        if (this.attackerNoAmmoToggled) {
            this.attacker.unit.units_ammo = 0;
        } else {
            this.attacker.unit.units_ammo = this.attackerAmmo;
        }
        if (this.defenderNoAmmoToggled) {
            this.defender.unit.units_ammo = 0;
        } else {
            this.defender.unit.units_ammo = this.defenderAmmo;
        }
       
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();
            request.open("POST", "api/calculator/calculate_new.php", true);
            request.setRequestHeader("Content-Type", "application/json");
            request.onreadystatechange = () => {
                if (request.readyState === XMLHttpRequest.DONE) {
                    if (request.status === 200) {
                        const response = JSON.parse(request.responseText);
                        this.calcResults['attackDamageMin'] = response['minInfo']['percent'];
                        this.calcResults['attackDamageMax'] = response['maxInfo']['percent'];
                        this.calcResults['attackFundsMin'] = response['minInfo']['fundsDamage'];
                        this.calcResults['attackFundsMax'] = response['maxInfo']['fundsDamage'];
    
                        this.calcResults['minCounterDamageMin'] = response['minCounterInfo']['minLuck']['counterPercent'];
                        this.calcResults['minCounterDamageMax'] = response['minCounterInfo']['maxLuck']['counterPercent'];
                        this.calcResults['maxCounterDamageMin'] = response['maxCounterInfo']['minLuck']['counterPercent'];
                        this.calcResults['maxCounterDamageMax'] = response['maxCounterInfo']['maxLuck']['counterPercent'];
    
                        this.calcResults['minCounterFundsMin'] = response['minCounterInfo']['minLuck']['counterFundsDamage'];
                        this.calcResults['minCounterFundsMax'] = response['minCounterInfo']['maxLuck']['counterFundsDamage'];
                        this.calcResults['maxCounterFundsMin'] = response['maxCounterInfo']['minLuck']['counterFundsDamage'];
                        this.calcResults['maxCounterFundsMax'] = response['maxCounterInfo']['maxLuck']['counterFundsDamage'];
                        resolve(); // Resolve the Promise when the calculation is done
                    } else {
                        console.error("Calc-Plus Error:", request.status);
                        reject(request.status); // Reject the Promise in case of an error
                    }
                }
            };

            request.send(JSON.stringify({'attacker': this.attacker, 'defender': this.defender}));
        });
    }

    genNextNode(id) { //returns node post attack
        let nextDefender = JSON.parse(JSON.stringify(this.defender));
        //get max defender hp after first attack
        const maxHP = Math.max(0, this.defenderDisplayHP - this.calcResults['attackDamageMin']);

        nextDefender['hp'] = Math.ceil(maxHP/10);
        const nextAttacker = JSON.parse(JSON.stringify(DEFAULT_ATTACKER));
        nextAttacker.country = this.attacker.country;

        const newNode = new CalcNode(nextAttacker, nextDefender, id);
        newNode.defenderMaxHP = maxHP;
        newNode.defenderDisplayHP = maxHP;

        newNode.defenderMaxCities = this.defender['cities'];
        newNode.defenderMaxTowers = this.defender['towers'];
        return newNode;
    }

    async refactor(valueChanges) {
        if (!this.isValid) {
            this.removeFocus();
        }
        await this.calculate(); //wait for calc
        const newChild = this.genNextNode(-1);//this is discarded so id doesnt matter???
        for (const child of this.children) {
            const oldDefender = JSON.parse(JSON.stringify(child.defender))
            child.defender = JSON.parse(JSON.stringify(newChild.defender));
            child.defenderMaxHP = newChild.defenderMaxHP;
            child.defenderDisplayHP = newChild.defenderDisplayHP;
            child.defenderMaxCities = newChild.defenderMaxCities;
            child.defenderMaxTowers = newChild.defenderMaxTowers;
            child.defenderNoAmmoToggled = this.defenderNoAmmoToggled;


            for (const key in valueChanges) {
                const k = key.replace('a_', '').replace('d_', '');
                if (valueChanges[key]) {
                    child.attacker[k] = this.attacker[k];
                } else if (key.startsWith('d_')) {
                    child.defender[k] = oldDefender[k];
                }
            }
            // child.attacker['towers'] = this.attacker['towers'];
            // child.attacker['cities'] = this.attacker['cities'];
            // child.attacker['funds'] = this.attacker['funds'];
            // child.attacker['power'] = this.attacker['power'];
            // child.attacker['co'] = this.attacker['co'];

            // TODO: Add other info that carries over here
            
            child.isValid = (child.defenderDisplayHP > 0) && this.isValid;
            await child.refactor(valueChanges);
        }
    }
}

/////////////////////////////////////////////////////
// CalcTree                                        // 
/////////////////////////////////////////////////////
class CalcTree{
    constructor(id) {
        this.root = new CalcNode(JSON.parse(JSON.stringify(DEFAULT_ATTACKER)), JSON.parse(JSON.stringify(DEFAULT_DEFENDER)), id);
        this.root.isRoot = true;
        this.activeNode = this.root;
        this.root.orient(0,0);
    }

    //refactor the active node
    async refactor(valueChanges) {
        await this.activeNode.refactor(valueChanges);
    }

    //returns html of each node
    getHTML(safeModeOn) {
        return this.root.getHTML(safeModeOn);
    }

    //find node by id, set as active, return node
    selectNode(id) {
        let node = this.root.findNode(id);
        if (node) {
            this.activeNode = node;
        }
        return node;
    }

    //returns height of tallest node
    getHeight() {
        return this.root.height;
    }

    //returns width of all nodes + offset
    getWidth() {
        return this.root.getMaxDepth() * (SIZE_X + OFFSET) - OFFSET;
    }
}

/////////////////////////////////////////////////////
// DamageCalculator                                // 
/////////////////////////////////////////////////////
class DamageCalculator {
    constructor() {
        this.nextID = -1;
        this.calcTreeList = [];
        this.safeModeOn = true;
        this.safeModeVisible = false;
        this.addNewTree();
        this.buildCalculator();
        this.currentElement = null;
        this.currentNode = null;
        this.zindex = Z_INDEX;
        this.clickSelectMode = 'N'; //N: None, A: Attacker, D: Defender
        this.clickedUnit = null;
        this.clickEvent = false;
        this.isMenuOpen = {
            'select-co': false,
            'select-terrain': false,
            'select-unit': false
        };
    }

    //toggle safe mode and swap out icon
    toggleSafeMode() {
        this.safeModeOn = !this.safeModeOn;
        const button = document.getElementById("calc-plus-safe");
        if (!this.safeModeVisible) {
            button.style.display = "none";
        } else {
            button.style.display = "block";
        }
        button.title = `Safe Mode is ${this.safeModeOn ? 'On' : 'Off'}. Click to toggle.`;
        const img = button.querySelector("img");
        img.src = chrome.runtime.getURL('/images/' + (this.safeModeOn ? 'lock' : 'unlock') + '_icon.png');
        const display = document.getElementById("calc-plus-display");
        display.innerHTML = this.getInnerHTML(); //refresh display
    }

    //shrink to default size
    shrinkCalculator() {
        //wrong numbers probably, but the calc has a min size in CSS
        const calc = document.getElementById("calc-plus");
        calc.style.width = SIZE_X + 'px';
        calc.style.height = SIZE_Y_FOCUSED + 'px';
    }

    orient() {
        if (this.activeCalcTree) {
            this.activeCalcTree.root.orient(0,0);
        }
    }

    //return next id, increment id
    getNextID() {
        this.nextID++;
        return this.nextID;
    }

    //refactor the active set
    async refactor(valueChanges) {
        await this.activeCalcTree.refactor(valueChanges);
    }

    //finds node by id, sets as active and returns node
    selectNode(id) {
        let node = null;
        for (const calcTree of this.calcTreeList) {
            node = calcTree.selectNode(id);
            if (node) {
                this.activeCalcTree = calcTree;
                break;
            }
        }
        return node;
    }

    //deletes node by id. if node is root, delete tree as well
    deleteNode(id) {
        const node = this.selectNode(id);
        if (node.id === this.activeCalcTree.root.id) {
            //get index of tree
            let index = 0;
            for (let i = 0; i < this.calcTreeList.length; i++) {
                if (this.calcTreeList[i].root.id === node.id) {
                    index = i;
                    break;
                }
            }
            this.calcTreeList.splice(index,1);//remove tree
            //JS garbage collection should take care of Tree and Node memory reclaimation automatically....?
        } else {
            node.delete(); //remove node
        }

        this.activeCalcTree = null;
        this.activeNode = null;

        if (this.calcTreeList.length > 0) {
            this.activeCalcTree = this.calcTreeList[0];
            this.activeNode = this.activeCalcTree.root;
        }
    }

    //returns HTML code for display element
    getInnerHTML() {
        let html = "";
        let y = 0;
        for(let i = 0; i < this.calcTreeList.length; i++) {
            html += `<div class="calc-plus-tree" style="width: ${this.calcTreeList[i].getWidth()}px; height: ${this.calcTreeList[i].getHeight()}px; top: ${y}px;">${this.calcTreeList[i].getHTML(this.safeModeOn)}</div>`;
            y += this.calcTreeList[i].getHeight() + TREE_OFFSET;
        }
        //add button
        html += `<div class="calc-plus-ctrls calc-plus-ctrls-new" title="New Calc">
                    <img src="${chrome.runtime.getURL('/images/new_calc_icon_20x20.png')}">
                 </div>`;
        return html;
    }

    addNewTree() {
        this.calcTreeList.push(new CalcTree(this.getNextID()));
        this.activeCalcTree = this.calcTreeList[this.calcTreeList.length-1];
        this.activeNode = this.activeCalcTree.root;
    }

    bringToFront() {
        if (this.zindex < Z_INDEX) {
            this.zindex += 1;
            const calcPlus = document.getElementById("calc-plus");
            calcPlus.style.zIndex = this.zindex;
        }
    }

    sendToBack() {
        if (this.zindex >= Z_INDEX) {
            this.zindex -= 1;
            const calcPlus = document.getElementById("calc-plus");
            calcPlus.style.zIndex = this.zindex;
        }
    }

    //returns the max depth out of all sets
    getMaxDepth() {
        let max = 0;
        this.calcTreeList.forEach(calcTree => {
            max = Math.max(max, calcTree.root.getMaxDepth());
        });
        return max;
    }

    updateWindowSize() {
        const calc = document.getElementById("calc-plus");
        const width = (this.getMaxDepth() + 1) * (SIZE_X + OFFSET) + 16;//root is depth 0
        const button_height = 22; //add calc button
        let height = 44 + button_height + (this.calcTreeList.length - 1) * TREE_OFFSET;
        this.calcTreeList.forEach(calcTree => {
            height += calcTree.root.height;
        });
        calc.style.width = width + 'px';
        calc.style.height = height + 'px';
    }

    updateInputs(node, element, valueChanges) {
        if (node && element) {
            //hp
            const hp = element.getElementsByClassName('hp-input');
            if (hp.length === 2) {
                node.attackerDisplayHP = (isNaN(parseInt(hp[0].value))) ? 1 : Math.max(1, Math.min(parseInt(hp[0].value), 100));
                node.defenderDisplayHP = (isNaN(parseInt(hp[1].value))) ? 1 : Math.max(1, Math.min(parseInt(hp[1].value), node.defenderMaxHP));
                node.attacker['hp'] = Math.ceil(hp[0].value/10);
                node.defender['hp'] = Math.ceil(hp[1].value/10);
            }
            //cities
            const cities = element.getElementsByClassName('city-input');
            if (cities.length === 2) {
                valueChanges['a_cities'] = valueChanges['a_cities'] ? true : node.attacker['cities'] !== ((isNaN(parseInt(cities[0].value))) ? 0 : Math.max(0, parseInt(cities[0].value)));
                valueChanges['d_cities'] = valueChanges['d_cities'] ? true : node.defender['cities'] !== ((isNaN(parseInt(cities[1].value))) ? 0 : Math.max(0, Math.min(parseInt(cities[1].value), node.defenderMaxCities)));
                
                node.attacker['cities'] = (isNaN(parseInt(cities[0].value))) ? 0 : Math.max(0, parseInt(cities[0].value));
                node.defender['cities'] = (isNaN(parseInt(cities[1].value))) ? 0 : Math.max(0, parseInt(cities[1].value));
            }
            //towers
            const towers = element.getElementsByClassName('tower-input');
            if (towers.length === 2) {
                valueChanges['a_towers'] = valueChanges['a_towers'] ? true : node.attacker['towers'] !== ((isNaN(parseInt(towers[0].value))) ? 0 : Math.max(0, parseInt(towers[0].value)));
                valueChanges['d_towers'] = valueChanges['d_towers'] ? true : node.defender['towers'] !== ((isNaN(parseInt(towers[1].value))) ? 0 : Math.max(0, Math.min(parseInt(towers[1].value), node.defenderMaxTowers)));

                node.attacker['towers'] = (isNaN(parseInt(towers[0].value))) ? 0 : Math.max(0, parseInt(towers[0].value));
                node.defender['towers'] = (isNaN(parseInt(towers[1].value))) ? 0 : Math.max(0, parseInt(towers[1].value));
            }
            //funds
            const funds = element.getElementsByClassName('funds-input');
            if (funds.length === 2) {
                valueChanges['funds'] = valueChanges['funds'] ? true : node.attacker['funds'] !== ((isNaN(parseInt(funds[0].value))) ? 0 : Math.max(0, parseInt(funds[0].value)));
                
                node.attacker['funds'] = (isNaN(parseInt(funds[0].value))) ? 0 : Math.max(0, parseInt(funds[0].value));
                node.defender['funds'] = (isNaN(parseInt(funds[1].value))) ? 0 : Math.max(0, parseInt(funds[1].value));
            }
        }
        return valueChanges;
    }

    dragMenus(deltaX, deltaY) {
        for (const key in this.isMenuOpen) {
            if (this.isMenuOpen[key]) {
                let menu = document.getElementById('calc-plus-' + key);
                menu.style.left = (parseInt(menu.style.left) + deltaX) + 'px';
                menu.style.top = (parseInt(menu.style.top) + deltaY) + 'px';
            }
        }
    }

    // Show/hide calc
    toggleCalculator() {
        this.bringToFront();
        const dc = document.getElementById('calc-plus');
        dc.style.display = (dc.style.display !== 'flex') ? 'flex' : 'none';
        for (const key in this.isMenuOpen) {
            this.closeMenu(key);
        }
    }

    calcMenuPosition(childRect, parentRect, offsetX, offsetY) {
        return ([childRect.x-parentRect.x+offsetX, childRect.y+childRect.height-parentRect.y+offsetY]);
    }
    
    closeMenu(menuKey) {
        if (this.isMenuOpen[menuKey]) {
            this.isMenuOpen[menuKey] = false;
            const menu = document.getElementById('calc-plus-' + menuKey);
            menu.style.display = 'none';
        }
    }

    openMenu(menuKey, node, portrait, offsetX, offsetY) {
        this.isMenuOpen[menuKey] = true;
        const menu = document.getElementById('calc-plus-' + menuKey);
        menu.style.display = 'inline';
        if (node && portrait) {
            menu.setAttribute('player-id', portrait.parentNode.parentNode.parentNode.classList[0].replace('calculator-', ''));
            menu.setAttribute('node-id', node.id);
            //locate menu
            const childRect = portrait.getBoundingClientRect();
            const parentRect = menu.parentNode.getBoundingClientRect();
            const menuPosition = this.calcMenuPosition(childRect, parentRect, offsetX, offsetY);
            menu.style.left = menuPosition[0] + 'px';
            menu.style.top = menuPosition[1] + 'px';
        }
    }

    getData(unitID) {
        //get game data
        let regex = /unitsInfo = (.*?);/;
        let match = regex.exec(document.documentElement.innerHTML);
        const units = JSON.parse(match[1]);

        regex = /terrainInfo = (.*?);/;
        match = regex.exec(document.documentElement.innerHTML);
        const terrain = JSON.parse(match[1]);

        regex = /buildingsInfo = (.*?);/;
        match = regex.exec(document.documentElement.innerHTML);
        const buildings = JSON.parse(match[1]);

        regex = /playersInfo = (.*?);/;
        match = regex.exec(document.documentElement.innerHTML);
        const players = JSON.parse(match[1]);

        //Get clicked unit
        const unit = units[unitID];

        //Get clicked tile
        const tile = terrain[unit.units_x][unit.units_y] || buildings[unit.units_x][unit.units_y];

        //Get player
        const player = players[unit.units_players_id];

        if (unit && tile && player) {
            this.clickedUnit = {
                "cities": player.other_buildings-player.labs-player.towers,
                "co": {"co_name": player.co_name, "co_id": player.players_co_id},
                "country": {"code": player.countries_code, "name": player.countries_name.replace(' ', '').toLowerCase()},
                "funds": player.players_funds,
                "hp": unit.units_hit_points,
                "power": player.players_co_power_on,
                "terrain": {"terrain_name": tile.terrain_name, "terrain_id": tile.terrain_id, "terrain_defense": tile.terrain_defense},
                "towers": player.towers,
                "unit": {"units_ammo": unit.units_ammo, "units_name": unit.units_name, "units_id": unit.generic_id}
            };
        }
    }

    //add calc
    async buildCalculator() {
        await this.refactor({'towers': true, 'cities': true, 'funds': true, 'power': true, 'co': true});
        const dc = document.getElementById('calculator');

        //insert html
        const co_menu = `
        <div class="co-menu" id="calc-plus-select-co" node-id="00" player-id="?" style="display: none; position: absolute; z-index: 900; top:0px; left:0px; width:166px;">
            <img src="terrain/aw2/dsandy.png?v=1" class="co_portrait">
            <img src="terrain/aw2/dsgrit.png?v=1" class="co_portrait">
            <img src="terrain/aw2/dskanbei.png?v=1" class="co_portrait">
            <img src="terrain/aw2/dsdrake.png?v=1" class="co_portrait">
            <img src="terrain/aw2/dsmax.png?v=1" class="co_portrait">
            <img src="terrain/aw2/dssami.png?v=1" class="co_portrait">
            <img src="terrain/aw2/dsolaf.png?v=1" class="co_portrait">
            <img src="terrain/aw2/dseagle.png?v=1" class="co_portrait">
            <img src="terrain/aw2/dsadder.png?v=1" class="co_portrait">
            <img src="terrain/aw2/dshawke.png?v=1" class="co_portrait">
            <img src="terrain/aw2/dssensei.png?v=1" class="co_portrait">
            <img src="terrain/aw2/dsjess.png?v=1" class="co_portrait">
            <img src="terrain/aw2/dscolin.png?v=1" class="co_portrait">
            <img src="terrain/aw2/dslash.png?v=1" class="co_portrait">
            <img src="terrain/aw2/dshachi.png?v=1" class="co_portrait">
            <img src="terrain/aw2/dssonja.png?v=1" class="co_portrait">
            <img src="terrain/aw2/dssasha.png?v=1" class="co_portrait">
            <img src="terrain/aw2/dsgrimm.png?v=1" class="co_portrait">
            <img src="terrain/aw2/dskoal.png?v=1" class="co_portrait">
            <img src="terrain/aw2/dsjake.png?v=1" class="co_portrait">
            <img src="terrain/aw2/dskindle.png?v=1" class="co_portrait">
            <img src="terrain/aw2/dsnell.png?v=1" class="co_portrait">
            <img src="terrain/aw2/dsflak.png?v=1" class="co_portrait">
            <img src="terrain/aw2/dsjugger.png?v=1" class="co_portrait">
            <img src="terrain/aw2/dsjavier.png?v=1" class="co_portrait">
            <img src="terrain/aw2/dsrachel.png?v=1" class="co_portrait">
            <img src="terrain/aw2/dssturm.png?v=1" class="co_portrait">
            <img src="terrain/aw2/dsvonbolt.png?v=1" class="co_portrait">
        </div>
        `;
        const terrain_menu = `
        <div class="terrain terrain-menu" id="calc-plus-select-terrain" node-id="00" player-id="?" style="display: none; position: absolute; z-index: 900; top:0px; left:0px; width:135px;">
            <img class="calc-plus-terrain-image" src="terrain/ani/plain.gif">
            <img class="calc-plus-terrain-image" src="terrain/ani/mountain.gif">
            <img class="calc-plus-terrain-image" src="terrain/ani/wood.gif">
            <img class="calc-plus-terrain-image" src="terrain/ani/hriver.gif">
            <img class="calc-plus-terrain-image" src="terrain/ani/hroad.gif">
            <img class="calc-plus-terrain-image" src="terrain/ani/hbridge.gif">
            <img class="calc-plus-terrain-image" src="terrain/ani/sea.gif">
            <img class="calc-plus-terrain-image" src="terrain/ani/hshoal.gif">
            <img class="calc-plus-terrain-image" src="terrain/ani/reef.gif">
            <img class="calc-plus-terrain-image" src="terrain/ani/orangestarcity.gif">
            <img class="calc-plus-terrain-image" src="terrain/ani/orangestarbase.gif">
            <img class="calc-plus-terrain-image" src="terrain/ani/orangestarairport.gif">
            <img class="calc-plus-terrain-image" src="terrain/ani/orangestarport.gif">
            <img class="calc-plus-terrain-image" src="terrain/ani/orangestarhq.gif">
            <img class="calc-plus-terrain-image" src="terrain/ani/orangestarcomtower.gif">
            <img class="calc-plus-terrain-image" src="terrain/ani/orangestarlab.gif">
        </div>
        `; 
        const unit_menu = `
        <div class="unit unit-menu" id="calc-plus-select-unit" node-id="00" player-id="?" style="display: none; position: absolute; z-index: 900; top:0px; left:0px; width:166px;">
            <img class="calc-plus-unit-image" src="terrain/ani/osinfantry.gif">
            <img class="calc-plus-unit-image" src="terrain/ani/osmech.gif">
            <img class="calc-plus-unit-image" src="terrain/ani/osmd.tank.gif">
            <img class="calc-plus-unit-image" src="terrain/ani/ostank.gif">
            <img class="calc-plus-unit-image" src="terrain/ani/osrecon.gif">
            <img class="calc-plus-unit-image" src="terrain/ani/osapc.gif">
            <img class="calc-plus-unit-image" src="terrain/ani/osartillery.gif">
            <img class="calc-plus-unit-image" src="terrain/ani/osrocket.gif">
            <img class="calc-plus-unit-image" src="terrain/ani/osanti-air.gif">
            <img class="calc-plus-unit-image" src="terrain/ani/osmissile.gif">
            <img class="calc-plus-unit-image" src="terrain/ani/osfighter.gif">
            <img class="calc-plus-unit-image" src="terrain/ani/osbomber.gif">
            <img class="calc-plus-unit-image" src="terrain/ani/osb-copter.gif">
            <img class="calc-plus-unit-image" src="terrain/ani/ost-copter.gif">
            <img class="calc-plus-unit-image" src="terrain/ani/osbattleship.gif">
            <img class="calc-plus-unit-image" src="terrain/ani/oscruiser.gif">
            <img class="calc-plus-unit-image" src="terrain/ani/oslander.gif">
            <img class="calc-plus-unit-image" src="terrain/ani/ossub.gif">
            <img class="calc-plus-unit-image" src="terrain/ani/osneotank.gif">
            <img class="calc-plus-unit-image" src="terrain/ani/ospiperunner.gif">
            <img class="calc-plus-unit-image" src="terrain/ani/osblackbomb.gif">
            <img class="calc-plus-unit-image" src="terrain/ani/osmegatank.gif">
            <img class="calc-plus-unit-image" src="terrain/ani/osblackboat.gif">
            <img class="calc-plus-unit-image" src="terrain/ani/osstealth.gif">
            <img class="calc-plus-unit-image" src="terrain/ani/oscarrier.gif">
        </div>
        `;
        const HTMLstring = `
            <div id="calc-plus" class="calc-plus" move="false" mouse="false" style="left: 200px; top: 200px; width: 358px; height: 278px; z-index: ${this.zindex};">
                <header id="calc-plus-header" class="calc-plus-header">
                    Damage Calculator +
                    <span style="display: flex;">
                        <div class="reverse-info-box" id="calc-plus-help" style="margin-top: 1px; margin-right: 9px;">
                            ?
                            <div class="info-box-text" style="right:0px; width:180px;">
                                Damage Calculator Plus by Sketch_Turner<br>
                                <a href="https://github.com/Sketch-Turner/AWBW-Damage-Calculator-Plus#table-of-contents" target="_blank">User Guide</a><br>
                                <a href="https://forms.gle/zyKQuBn7xkgqtNSr5" target="_blank">Error Reporting</a><br>
                                See you on the Global League. Good luck, have fun!!
                            </div>
                        </div>
                        <div title="Safe Mode is ${this.safeModeOn ? 'On' : 'Off'}. Click to toggle." id="calc-plus-safe" style="display: none; margin-top: 4px; margin-right: 9px; height: 16px;"><img src="${chrome.runtime.getURL('/images/' + (this.safeModeOn ? 'lock' : 'unlock') + '_icon.png')}"></div>
                        <div title="Shrink" id="calc-plus-shrink" style="margin-top: 4px; margin-right: 9px; height: 16px;"><img src="${chrome.runtime.getURL('/images/shrink_icon.png')}"></div>
                        <div title="Expand" id="calc-plus-grow" style="margin-top: 4px; margin-right: 9px; height: 16px;"><img src="${chrome.runtime.getURL('/images/grow_icon.png')}"></div>
                        <div title="Hide" class="close-calc-plus">&#10005;</div>
                    </span>
                </header>
                <div id="calc-plus-display" class="calc-plus-display"> 
                    ${this.getInnerHTML()}
                </div>
            </div> 
            ${co_menu}
            ${terrain_menu}
            ${unit_menu}
        `;
    
        dc.insertAdjacentHTML('afterend', HTMLstring);

        //Header options
        const calculatorClose = document.querySelector(".close-calc-plus");
        calculatorClose.addEventListener("click", () => this.toggleCalculator());
        const calculatorShrink = document.getElementById("calc-plus-shrink");
        calculatorShrink.addEventListener("click", () => this.shrinkCalculator());
        const calculatorGrow = document.getElementById("calc-plus-grow");
        calculatorGrow.addEventListener("click", () => this.updateWindowSize());
        const calculatorSafe = document.getElementById("calc-plus-safe");
        calculatorSafe.addEventListener("click", () => this.toggleSafeMode());

        const grabHeader = document.getElementById("calc-plus-header");
        const calcPlus = document.getElementById("calc-plus");

        //detect key press to show safe mode unlock
        document.addEventListener("keydown", (event) => {
            if (event.key === "+") {
                this.safeModeVisible = !this.safeModeVisible;
                this.safeModeOn = false;
                this.toggleSafeMode();
            }
        });

        //if click on old dc, send dc+ to back
        dc.addEventListener("mousedown", () => this.sendToBack());

        let lastPosX = parseInt(calcPlus.style.left);
        let lastPosY = parseInt(calcPlus.style.top);

        grabHeader.addEventListener("mousedown", (event) => {
            this.bringToFront();
            grabHeader.mouse = "true";
            grabHeader.style.cursor = "grabbing";
            grabHeader.offsetX = event.clientX - lastPosX;
            grabHeader.offsetY = event.clientY - lastPosY;
        });

        document.addEventListener("mousemove", (event) => {
            if (grabHeader.mouse === "true") {
                grabHeader.style.cursor = "grabbing";
                let posX = event.clientX - grabHeader.offsetX;
                let posY = event.clientY - grabHeader.offsetY;

                let deltaX = posX-lastPosX;
                let deltaY = posY-lastPosY;

                lastPosX = posX;
                lastPosY = posY;

                calcPlus.style.left = posX + "px";
                calcPlus.style.top = posY + "px";
                //update position of menus
                this.dragMenus(deltaX, deltaY);
            }
        });

        document.addEventListener("mouseup", () => {
            if (grabHeader.mouse === "true") {
                grabHeader.mouse = "false";
                grabHeader.style.cursor = "grab";
            }
        });

        //Calc plus display
        const calcDisplay = document.getElementById("calc-plus-display"); 

        //Attack click listener to gamemap. Used to detect unit selections.
        const gamemap = document.getElementById('gamemap');
        const gamemapClick = async (event) => {
            if (this.clickSelectMode !== 'N') {
                event.stopPropagation();
                if (!this.clickEvent) {
                    this.clickEvent = true;
    
                    let clickTarget = event.target.closest('.game-unit') || event.target.closest('span[id^="unit"]'); 
                    if (clickTarget) {
                        const id = clickTarget.getAttribute('data-unit-id') || clickTarget.id.replace('unit_', '');
                        this.getData(id); //set values of this.clickedUnit
                        if (this.clickSelectMode === 'A') {
                            this.currentNode.attacker = JSON.parse(JSON.stringify(this.clickedUnit));
                            this.currentNode.attackerAmmo = this.currentNode.attacker.unit.units_ammo;
                            this.currentNode.attackerDisplayHP = this.currentNode.attacker.hp * 10;
                            this.currentNode.selectingAttacker = false;
                        }
                        else if (this.clickSelectMode === 'D') {
                            this.currentNode.defender = JSON.parse(JSON.stringify(this.clickedUnit));
                            this.currentNode.defenderAmmo = this.currentNode.defender.unit.units_ammo;
                            this.currentNode.defenderDisplayHP = this.currentNode.defender.hp * 10;
                            this.currentNode.selectingDefender = false;
                        }
                        this.clickSelectMode = 'N';
                        await this.currentNode.refactor({'a_towers': true, 'a_cities': true, 'funds': true, 'power': true, 'co': true, 'd_towers': true, 'd_cities': true}); //if current node calc has changed, need to update all children
                        this.orient();
                        calcDisplay.innerHTML = this.getInnerHTML(); // Update the display
                    }
                    this.clickEvent = false;
                }
            }
        };
        
        // Add event listeners for both mousedown and click events
        gamemap.addEventListener('mousedown', gamemapClick, true); //normal game
        gamemap.addEventListener('click', gamemapClick, true); //move planner 
        
        // Attach a single click event listener to the container  
        calcDisplay.addEventListener('click', async (event) => {
            this.bringToFront();
        
            const addButton = event.target.closest('.calc-plus-ctrls-add');
            const deleteButton = event.target.closest('.calc-plus-ctrls-del');
            const newButton = event.target.closest('.calc-plus-ctrls-new');
            const svgNode = event.target.closest('.calc-plus-node');
            const toggleCOP = event.target.closest('.toggle-cop');
            const toggleSCOP = event.target.closest('.toggle-scop');
            const toggleAmmo = event.target.closest('.ammo-options');
            const selectCO = event.target.closest('.selected-co');
            const selectTerrain = event.target.closest('.selected-terrain');
            const selectUnit = event.target.closest('.selected-unit');
            const toggleClickSelect = event.target.closest('.calc-plus-select-attacker') ? event.target.closest('.calc-plus-select-attacker') : event.target.closest('.calc-plus-select-defender');
            const inputField = event.target.closest('.text-input');
                   
            let updateDisplay = true; 
            let updateWindow = false;
            let valueChanges = {'a_towers': false, 'a_cities': false, 'funds': false, 'power': false, 'co': false, 'd_towers': false, 'd_cities': false};
            
            if (newButton) {
                for (const key in this.isMenuOpen) {
                    this.closeMenu(key);//close all menus
                }
                this.addNewTree();
                this.currentNode = this.activeCalcTree.activeNode;
                //update display
                await this.currentNode.refactor(valueChanges);
                this.orient();
                this.updateWindowSize(); //resize window
                calcDisplay.innerHTML = this.getInnerHTML()
            } else if (svgNode) {
                valueChanges = this.updateInputs(this.currentNode, this.currentElement, valueChanges);
                this.currentElement = svgNode;

                const id = parseInt(svgNode.getAttribute('data-id'));
                const selectedNode = this.selectNode(id);
                        
                if (selectedNode) {
                    //update current node values
                    this.currentNode = selectedNode;

                    if (deleteButton) {
                        // Delete
                        for (const key in this.isMenuOpen) {
                            this.closeMenu(key);//close all menus
                        }
                        //selectedNode.delete();
                        this.deleteNode(id);
                        updateWindow = true;
                    } else if (addButton && selectedNode.isValid) {
                        // Add
                        for (const key in this.isMenuOpen) {
                            this.closeMenu(key);//close all menus
                        }
                        valueChanges = {'a_towers': true, 'a_cities': true, 'funds': true, 'power': true, 'co': true, 'd_towers': false, 'd_cities': false};
                        selectedNode.add(selectedNode.genNextNode(this.getNextID()));
                        updateWindow = true;
                    } else if (toggleClickSelect && selectedNode.isValid) {
                        for (const key in this.isMenuOpen) {
                            this.closeMenu(key);//close all menus
                        }
                        if (this.clickSelectMode === 'N') {
                            if (toggleClickSelect.classList[0] === 'calc-plus-select-attacker') {
                                this.clickSelectMode = 'A';
                                selectedNode.selectingAttacker = true;
                            } else if (toggleClickSelect.classList[0] === 'calc-plus-select-defender') {
                                this.clickSelectMode = 'D';
                                selectedNode.selectingDefender = true;
                            }
                        } else {
                            this.clickSelectMode = 'N';
                            selectedNode.selectingAttacker = false;
                            selectedNode.selectingDefender = false;
                        }

                    } else if (toggleCOP && selectedNode.isValid) {
                        for (const key in this.isMenuOpen) {
                            this.closeMenu(key);//close all menus
                        }
                        
                        if (selectedNode.depth === 0 || !this.safeModeOn) { 
                            //changes to root are always allowed
                            if (toggleCOP.parentNode.parentNode.parentNode.parentNode.classList[0].replace('calculator-', '') === 'attack') {
                                selectedNode.attacker['power'] = (selectedNode.attacker['power'] !== 'Y') ? 'Y' : 'N';
                                valueChanges['power'] = true;
                            } else {
                                selectedNode.defender['power'] = (selectedNode.defender['power'] !== 'Y') ? 'Y' : 'N';
                            }
                        } else if (selectedNode.parent.attacker['power'] === 'N' && toggleCOP.parentNode.parentNode.parentNode.parentNode.classList[0].replace('calculator-', '') === 'attack') {
                            //if parent power is not active, attacker can toggle    
                            selectedNode.attacker['power'] = (selectedNode.attacker['power'] !== 'Y') ? 'Y' : 'N';
                            valueChanges['power'] = true;
                        }
                    } else if (toggleSCOP && selectedNode.isValid) {
                        for (const key in this.isMenuOpen) {
                            this.closeMenu(key);//close all menus
                        }
                        
                        if (selectedNode.depth === 0 || !this.safeModeOn) { 
                            //changes to root are always allowed
                            if (toggleSCOP.parentNode.parentNode.parentNode.parentNode.classList[0].replace('calculator-', '') === 'attack') {
                                selectedNode.attacker['power'] = (selectedNode.attacker['power'] !== 'S') ? 'S' : 'N';
                                valueChanges['power'] = true;
                            } else {
                                selectedNode.defender['power'] = (selectedNode.defender['power'] !== 'S') ? 'S' : 'N';
                            }
                        } else if (selectedNode.parent.attacker['power'] === 'N' && toggleSCOP.parentNode.parentNode.parentNode.parentNode.classList[0].replace('calculator-', '') === 'attack') {
                            //if parent power is not active, attacker can toggle    
                            selectedNode.attacker['power'] = (selectedNode.attacker['power'] !== 'S') ? 'S' : 'N';
                            valueChanges['power'] = true;
                        }
                    } else if (toggleAmmo && selectedNode.isValid) {
                        for (const key in this.isMenuOpen) {
                            this.closeMenu(key);//close all menus
                        }
                        
                        if (selectedNode.depth === 0  || !this.safeModeOn) { 
                            //changes to root are always allowed
                            if (toggleAmmo.parentNode.parentNode.classList[0].replace('calculator-', '') === 'attack') {
                                selectedNode.attackerNoAmmoToggled = !selectedNode.attackerNoAmmoToggled;
                            } else {
                                selectedNode.defenderNoAmmoToggled = !selectedNode.defenderNoAmmoToggled;
                            }
                        } else if (!selectedNode.parent.defenderNoAmmoToggled && toggleAmmo.parentNode.parentNode.classList[0].replace('calculator-', '') === 'defend') {
                            //if defender parent had ammo, defender can toggle   
                            selectedNode.defenderNoAmmoToggled = !selectedNode.defenderNoAmmoToggled;
                        }
                    } else if (selectCO && selectedNode.isValid) {
                        this.closeMenu('select-terrain');
                        this.closeMenu('select-unit');
                        //at root or safe mode off
                        if (selectedNode.depth === 0  || !this.safeModeOn) {
                            //select co
                            if (!selectedNode.isFocused) {
                                this.activeCalcTree.root.removeFocus();
                                selectedNode.setFocus(true);
                            }
                            // if menu not open
                            if (!this.isMenuOpen['select-co']) {
                                this.openMenu('select-co', selectedNode, selectCO, 5, 5);//node, portrait element
                            } else {
                                // if clicking same portrait, close menu
                                const menu = document.getElementById('calc-plus-select-co');
                                if (menu.getAttribute('player-id') === selectCO.parentNode.parentNode.parentNode.classList[0].replace('calculator-', '') && menu.getAttribute('node-id') === selectedNode.id) {
                                    this.closeMenu('select-co');
                                } else {
                                    //move menu
                                    const menuPosition = this.calcMenuPosition(selectCO.getBoundingClientRect(), menu.parentNode.getBoundingClientRect(), 5, 5);
                                    menu.setAttribute('player-id', selectCO.parentNode.parentNode.parentNode.classList[0].replace('calculator-', ''));
                                    menu.setAttribute('node-id', selectedNode.id);
                                    menu.style.left = menuPosition[0] + 'px';
                                    menu.style.top = menuPosition[1] + 'px';
                                }
                            }
                        }
                    } else if (selectTerrain && selectedNode.isValid) {
                        this.closeMenu('select-co');
                        this.closeMenu('select-unit');
                        //at root, safe mode off, or attacker can change
                        if (selectedNode.depth === 0 || !this.safeModeOn || selectTerrain.parentNode.parentNode.parentNode.classList[0].replace('calculator-', '') === 'attack') {
                            const menu = document.getElementById('calc-plus-select-terrain');
                            let newCountry;
                            if (selectTerrain.parentNode.parentNode.parentNode.classList[0].replace('calculator-', '') === 'attack') {
                                newCountry = this.currentNode.attacker['country']['name'];
                            } else {
                                newCountry = this.currentNode.defender['country']['name'];
                            }
    
                            // use lab to find current country
                            const imgElements = menu.querySelectorAll(".calc-plus-terrain-image");
                            const oldCountry = imgElements[imgElements.length-1].src.split('ani/')[1].split('lab')[0];
    
                            // Iterate through the last 7 images and replace the substring
                            if (newCountry !== oldCountry) {
                                for (let i = imgElements.length - 7; i < imgElements.length; i++) {
                                    const imgElement = imgElements[i];
                                    const originalSrc = imgElement.getAttribute("src");
                                    const newSrc = originalSrc.replace(oldCountry, newCountry); // Replace with the desired new value
                                    imgElement.setAttribute("src", newSrc);
                                }
                            }
                            //select terrain
                            if (!selectedNode.isFocused) {
                                this.activeCalcTree.root.removeFocus();
                                selectedNode.setFocus(true);
                            }
                            // if menu not open
                            if (!this.isMenuOpen['select-terrain']) {
                                this.openMenu('select-terrain', selectedNode, selectTerrain, -6, 16);//node, portrait element
                            } else {
                                // if clicking same portrait, close menu
                                if (menu.getAttribute('player-id') === selectTerrain.parentNode.parentNode.parentNode.classList[0].replace('calculator-', '') && menu.getAttribute('node-id') === selectedNode.id) {
                                    this.closeMenu('select-terrain');
                                } else {
                                    //move menu
                                    const menuPosition = this.calcMenuPosition(selectTerrain.getBoundingClientRect(), menu.parentNode.getBoundingClientRect(), -6, 16);
                                    menu.setAttribute('player-id', selectTerrain.parentNode.parentNode.parentNode.classList[0].replace('calculator-', ''));
                                    menu.setAttribute('node-id', selectedNode.id);
                                    menu.style.left = menuPosition[0] + 'px';
                                    menu.style.top = menuPosition[1] + 'px';
                                }
                            }
                        }

                    } else if (selectUnit && selectedNode.isValid) {
                        this.closeMenu('select-terrain');
                        this.closeMenu('select-co');
                        //at root, safe mode off, or attacker
                        if (selectedNode.depth === 0 || !this.safeModeOn || selectUnit.parentNode.parentNode.parentNode.classList[0].replace('calculator-', '') === 'attack') {
                            const menu = document.getElementById('calc-plus-select-unit');
                            let newCountry;
                            if (selectUnit.parentNode.parentNode.parentNode.classList[0].replace('calculator-', '') === 'attack') {
                                newCountry = this.currentNode.attacker['country']['code'];
                            } else {
                                newCountry = this.currentNode.defender['country']['code'];
                            }
                            // use lab to find current country
                            const imgElements = menu.querySelectorAll(".calc-plus-unit-image");
                            const oldCountry = imgElements[imgElements.length-1].src.split('ani/')[1].split('carrier')[0];

                            // Iterate through the last 7 images and replace the substring
                            if (newCountry !== oldCountry) {
                                for (let i = 0; i < imgElements.length; i++) {
                                    const imgElement = imgElements[i];
                                    const originalSrc = imgElement.getAttribute("src");
                                    const newSrc = originalSrc.replace(oldCountry, newCountry); // Replace with the desired new value
                                    imgElement.setAttribute("src", newSrc);
                                }
                            }
                            //select unit
                            if (!selectedNode.isFocused) {
                                this.activeCalcTree.root.removeFocus();
                                selectedNode.setFocus(true);
                            }
                            // if menu not open
                            if (!this.isMenuOpen['select-unit']) {
                                this.openMenu('select-unit', selectedNode, selectUnit, -4, 14);//node, portrait element
                            } else {
                                // if clicking same portrait, close menu
                                if (menu.getAttribute('player-id') === selectUnit.parentNode.parentNode.parentNode.classList[0].replace('calculator-', '') && menu.getAttribute('node-id') === selectedNode.id) {
                                    this.closeMenu('select-unit');
                                } else {
                                    //move menu
                                    const menuPosition = this.calcMenuPosition(selectUnit.getBoundingClientRect(), menu.parentNode.getBoundingClientRect(), -6, 16);
                                    menu.setAttribute('player-id', selectUnit.parentNode.parentNode.parentNode.classList[0].replace('calculator-', ''));
                                    menu.setAttribute('node-id', selectedNode.id);
                                    menu.style.left = menuPosition[0] + 'px';
                                    menu.style.top = menuPosition[1] + 'px';
                                }
                            }
                        }
                        
                    } else if (inputField && selectedNode.isValid) {
                        for (const key in this.isMenuOpen) {
                            this.closeMenu(key);//close all menus
                        }
                        
                        valueChanges = this.updateInputs(this.currentNode, this.currentElement, valueChanges);
                        updateDisplay = false;
                    } else { //click
                        // Focus node
                        for (const key in this.isMenuOpen) {
                            this.closeMenu(key);//close all menus
                        }
                        
                        if (selectedNode.isValid) {
                            if (!selectedNode.isFocused) {
                                // if (!selectedNode.parent.isFocused) {
                                //     this.activeCalcTree.root.removeFocus();
                                // }
                                selectedNode.setFocus(true);
                            } else {
                                if (event.clientY - svgNode.getBoundingClientRect().top <= INDENT * 2) {
                                    selectedNode.removeFocus();
                                }
                            }
                            updateWindow = true;
                        }

                    }
                    //update new node values
                    valueChanges = this.updateInputs(selectedNode, svgNode, valueChanges);
                    if (updateDisplay) {
                        await this.currentNode.refactor(valueChanges);//if current node calc has changed, need to update all children
                        this.orient();
                        if (updateWindow) {
                            this.updateWindowSize();
                        }
                        calcDisplay.innerHTML = this.getInnerHTML(); // Update the display
                    }
                }
            }
        });

        // Attach a imput change event listener
        calcDisplay.addEventListener("change", async (event) => {
            const svgNode = event.target.closest('.calc-plus-node');
            let valueChanges = {'a_towers': false, 'a_cities': false, 'funds': false, 'power': false, 'co': false, 'd_towers': false, 'd_cities': false};
            if (svgNode) {
                valueChanges =  this.updateInputs(this.currentNode, this.currentElement, valueChanges);
                this.currentElement = svgNode;

                const id = parseInt(svgNode.getAttribute('data-id'));
                const selectedNode = this.selectNode(id);
        
                if (selectedNode) {
                    //update current node values
                    this.currentNode = selectedNode;
                    valueChanges = this.updateInputs(selectedNode, svgNode, valueChanges);
                    await this.currentNode.refactor(valueChanges);
                    this.orient();
                    calcDisplay.innerHTML = this.getInnerHTML(); // Update the display
                }
            }
        });

        //select co menu
        const selectCOMenu = document.getElementById('calc-plus-select-co');
        selectCOMenu.addEventListener('click', async (event) => {
            let valueChanges = {'a_towers': false, 'a_cities': false, 'funds': false, 'power': false, 'co': false, 'd_towers': false, 'd_cities': false};
            //detect co
            const co = event.target.closest('.co_portrait').src.split('/ds')[1].split('.')[0];
            //detect node
            const node = this.currentNode;
            //detect attacker/defender and set node
            if (selectCOMenu.getAttribute('player-id') === 'attack') {
                node.attacker['co'] = CO_LIST[co];
                valueChanges['co'] = true;
            } else {
                node.defender['co'] = CO_LIST[co];
            }
            this.closeMenu('select-co');
            await this.currentNode.refactor(valueChanges);
            this.orient();
            calcDisplay.innerHTML = this.getInnerHTML(); // Update the display
        });

        //select terrain
        const selectTerrainMenu = document.getElementById('calc-plus-select-terrain');
        selectTerrainMenu.addEventListener('click', async (event) => {
            let valueChanges = {'a_towers': false, 'a_cities': false, 'funds': false, 'power': false, 'co': false, 'd_towers': false, 'd_cities': false};
            //detect terrain
            let terrain = event.target.closest('.calc-plus-terrain-image').src.split('ani/')[1].split('.')[0];

            //detect node
            const node = this.currentNode;
            //check for building
            if (terrain.includes(node.attacker['country']['name']) || terrain.includes(node.defender['country']['name'])) {
                terrain = terrain.replace(node.attacker['country']['name'], '').replace(node.defender['country']['name'], '');
            }

            //detect attacker/defender and set node
            if (selectTerrainMenu.getAttribute('player-id') === 'attack') {
                node.attacker['terrain'] = TERRAIN_LIST[terrain];
            } else {
                node.defender['terrain'] = TERRAIN_LIST[terrain];
            }
            this.closeMenu('select-terrain');
            await this.currentNode.refactor(valueChanges);
            this.orient();
            calcDisplay.innerHTML = this.getInnerHTML(); // Update the display
        });

        //select unit menu
        const selectUnitMenu = document.getElementById('calc-plus-select-unit');
        selectUnitMenu.addEventListener('click', async (event) => {
            let valueChanges = {'a_towers': false, 'a_cities': false, 'funds': false, 'power': false, 'co': false, 'd_towers': false, 'd_cities': false};
            //detect unit
            const unit = event.target.closest('.calc-plus-unit-image').src.split('ani/')[1].split('.gif')[0].slice(2);
            //detect node
            const node = this.currentNode;
            //detect attacker/defender and set node
            if (selectUnitMenu.getAttribute('player-id') === 'attack') {
                node.attacker['unit'] = JSON.parse(JSON.stringify(UNIT_LIST[unit]));
                node.attackerAmmo = node.attacker.unit.units_ammo;
            } else {
                node.defender['unit'] = JSON.parse(JSON.stringify(UNIT_LIST[unit]));
                node.defenderAmmo = node.defender.unit.units_ammo;
            }
            this.closeMenu('select-unit');
            await this.currentNode.refactor(valueChanges);
            this.orient();
            calcDisplay.innerHTML = this.getInnerHTML(); // Update the display
        });
    }
}

/////////////////////////////////////////////////////////////////////
// MAIN                                                            //
/////////////////////////////////////////////////////////////////////

//Add CSS
const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = chrome.runtime.getURL('/scripts/calc_plus.css');
document.head.appendChild(link);

//Add calc plus button
const old_dc_button = document.querySelector('.calculator-toggle.game-tools-btn') || document.querySelector('.calculator-toggle.planner-calc-toggle');
if (old_dc_button) {
    const new_dc_button = `
    <div class="calculator-plus-toggle game-tools-btn" style="border-right: none;">
        <div class="game-tools-bg">
            <img src="` + chrome.runtime.getURL('/images/new_calc.png') + `" style="display: block;">
        </div>
        <span class="game-tools-btn-text small_text">Damage Calculator +</span>
    </div>
    `;

    old_dc_button.insertAdjacentHTML('beforebegin', new_dc_button);

    //Add calculator
    let DCP = new DamageCalculator();

    //If old calc is opened, send dc+ to back
    old_dc_button.addEventListener('click', () => DCP.sendToBack());

    // Add event listener for new button
    const menuContainer = document.getElementById('map-controls-container');
    menuContainer.addEventListener('click', function (event) {
    // Check if the clicked element or its parent is the newly added button
    if (event.target.classList.contains('calculator-plus-toggle') || event.target.closest('.calculator-plus-toggle')) {
        // Handle the click event for the new button here
        DCP.toggleCalculator();
    }
    });
}

const INDENT = 20;
const OFFSET = 3;
const TREE_OFFSET = 10;
const SIZE_X = 340;
const SIZE_Y = 136;
const SIZE_Y_FOCUSED = 250;
const SCROLLBAR_WIDTH = 20;
const Z_INDEX = 800;
const TILE_SIZE = 16;
const SIG_PIXELS = [15, 18, 71, 78, 220];
const SESSION_DATA_KEY = "calc-plus-data";
const CURRENT_VERSION = "1.2.0";

//TODO better data import solution
const CO_DATA = {
    "Andy": {
        "Global": {
            "D2D": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0},
            "COP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0},
            "SCOP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0}
        },
        "Units":{
            "1": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.2, "defense": 0.1, "move": 1, "range": 0}
            },
            "2": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.2, "defense": 0.1, "move": 1, "range": 0}
            },
            "3": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.2, "defense": 0.1, "move": 1, "range": 0}
            },
            "4": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.2, "defense": 0.1, "move": 1, "range": 0}
            },
            "5": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.2, "defense": 0.1, "move": 1, "range": 0}
            },
            "6": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 1, "range": 0}
            },
            "7": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.2, "defense": 0.1, "move": 1, "range": 0}
            },
            "8": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.2, "defense": 0.1, "move": 1, "range": 0}
            },
            "9": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.2, "defense": 0.1, "move": 1, "range": 0}
            },
            "10": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.2, "defense": 0.1, "move": 1, "range": 0}
            },
            "11": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.2, "defense": 0.1, "move": 1, "range": 0}
            },
            "12": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.2, "defense": 0.1, "move": 1, "range": 0}
            },
            "13": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.2, "defense": 0.1, "move": 1, "range": 0}
            },
            "14": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 1, "range": 0}
            },
            "15": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.2, "defense": 0.1, "move": 1, "range": 0}
            },
            "16": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.2, "defense": 0.1, "move": 1, "range": 0}
            },
            "17": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 1, "range": 0}
            },
            "18": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.2, "defense": 0.1, "move": 1, "range": 0}
            },
            "28": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 1, "range": 0}
            },
            "29": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.2, "defense": 0.1, "move": 1, "range": 0}
            },
            "30": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.2, "defense": 0.1, "move": 1, "range": 0}
            },
            "46": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.2, "defense": 0.1, "move": 1, "range": 0}
            },
            "960900": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.2, "defense": 0.1, "move": 1, "range": 0}
            },
            "968731": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 1, "range": 0}
            },
            "1141438": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.2, "defense": 0.1, "move": 1, "range": 0}
            }
        }
    },
    "Hachi": {
        "Global": {
            "D2D": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 0.9, "attack_bonus_plain": 0},
            "COP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 0.5, "attack_bonus_plain": 0},
            "SCOP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 0.5, "attack_bonus_plain": 0}
        },
        "Units":{
            "1": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "2": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "3": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "4": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "5": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "6": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "7": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "8": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "9": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "10": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "11": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "12": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "13": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "14": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "15": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "16": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "17": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "18": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "28": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "29": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "30": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "46": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "960900": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "968731": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "1141438": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            }
        }
    },
    "Jake": {
        "Global": {
            "D2D": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0.1},
            "COP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0.2},
            "SCOP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0.4}
        },
        "Units":{
            "1": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "2": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "3": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 0}
            },
            "4": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 0}
            },
            "5": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 0}
            },
            "6": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 2, "range": 0}
            },
            "7": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 1},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 1}
            },
            "8": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 1},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 1}
            },
            "9": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 0}
            },
            "10": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 1},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 1}
            },
            "11": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "12": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "13": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "14": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "15": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "16": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "17": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "18": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "28": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "29": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "30": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "46": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 0}
            },
            "960900": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 1},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 1}
            },
            "968731": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "1141438": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 0}
            }
        }
    },
    "Max": {
        "Global": {
            "D2D": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0},
            "COP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0},
            "SCOP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0}
        },
        "Units":{
            "1": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "2": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "3": {
                "D2D": {"attack": 0.2, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.4, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.6, "defense": 0.1, "move": 2, "range": 0}
            },
            "4": {
                "D2D": {"attack": 0.2, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.4, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.6, "defense": 0.1, "move": 2, "range": 0}
            },
            "5": {
                "D2D": {"attack": 0.2, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.4, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.6, "defense": 0.1, "move": 2, "range": 0}
            },
            "6": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "7": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": -1},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": -1},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": -1}
            },
            "8": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": -1},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": -1},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": -1}
            },
            "9": {
                "D2D": {"attack": 0.2, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.4, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.6, "defense": 0.1, "move": 2, "range": 0}
            },
            "10": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": -1},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": -1},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": -1}
            },
            "11": {
                "D2D": {"attack": 0.2, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.4, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.6, "defense": 0.1, "move": 2, "range": 0}
            },
            "12": {
                "D2D": {"attack": 0.2, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.4, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.6, "defense": 0.1, "move": 2, "range": 0}
            },
            "13": {
                "D2D": {"attack": 0.2, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.4, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.6, "defense": 0.1, "move": 2, "range": 0}
            },
            "14": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "15": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": -1},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": -1},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": -1}
            },
            "16": {
                "D2D": {"attack": 0.2, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.4, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.6, "defense": 0.1, "move": 2, "range": 0}
            },
            "17": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "18": {
                "D2D": {"attack": 0.2, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.4, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.6, "defense": 0.1, "move": 2, "range": 0}
            },
            "28": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "29": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": -1},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": -1},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": -1}
            },
            "30": {
                "D2D": {"attack": 0.2, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.4, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.6, "defense": 0.1, "move": 2, "range": 0}
            },
            "46": {
                "D2D": {"attack": 0.2, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.4, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.6, "defense": 0.1, "move": 2, "range": 0}
            },
            "960900": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": -1},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": -1},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": -1}
            },
            "968731": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "1141438": {
                "D2D": {"attack": 0.2, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.4, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.6, "defense": 0.1, "move": 2, "range": 0}
            }
        }
    },
    "Nell": {
        "Global": {
            "D2D": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 19, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0},
            "COP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 59, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0},
            "SCOP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 99, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0}
        },
        "Units":{
            "1": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "2": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "3": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "4": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "5": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "6": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "7": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "8": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "9": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "10": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "11": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "12": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "13": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "14": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "15": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "16": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "17": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "18": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "28": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "29": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "30": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "46": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "960900": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "968731": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "1141438": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            }
        }
    },
    "Rachel": {
        "Global": {
            "D2D": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0},
            "COP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 39, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0},
            "SCOP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0}
        },
        "Missile": {
            "SCOP": {"footsoldier": 3, "unit_value": 3, "unit_hp": 3}
        },
        "Units": {
            "1": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "2": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "3": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "4": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "5": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "6": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "7": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "8": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "9": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "10": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "11": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "12": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "13": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "14": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "15": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "16": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "17": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "18": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "28": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "29": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "30": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "46": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "960900": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "968731": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "1141438": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            }
        }
    },
    "Sami": {
        "Global": {
            "D2D": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0},
            "COP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0},
            "SCOP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0}
        },
        "Units":{
            "1": {
                "D2D": {"attack": 0.3, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.6, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.8, "defense": 0.1, "move": 2, "range": 0}
            },
            "2": {
                "D2D": {"attack": 0.3, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.6, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.8, "defense": 0.1, "move": 2, "range": 0}
            },
            "3": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "4": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "5": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "6": {
                "D2D": {"attack": 0, "defense": 0, "move": 1, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 1, "range": 0}
            },
            "7": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "8": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "9": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "10": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "11": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "12": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "13": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "14": {
                "D2D": {"attack": 0, "defense": 0, "move": 1, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 1, "range": 0}
            },
            "15": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "16": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "17": {
                "D2D": {"attack": 0, "defense": 0, "move": 1, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 1, "range": 0}
            },
            "18": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "28": {
                "D2D": {"attack": 0, "defense": 0, "move": 1, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 1, "range": 0}
            },
            "29": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "30": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "46": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "960900": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "968731": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "1141438": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            }
        }
    },
    "Colin": {
        "Global": {
            "D2D": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 0.8, "attack_bonus_plain": 0},
            "COP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 0.8, "attack_bonus_plain": 0},
            "SCOP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 0.8, "attack_bonus_plain": 0}
        },
        "Units":{
            "1": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "2": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "3": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "4": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "5": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "6": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "7": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "8": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "9": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "10": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "11": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "12": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "13": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "14": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "15": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "16": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "17": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "18": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "28": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "29": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "30": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "46": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "960900": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "968731": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "1141438": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            }
        }
    },
    "Grit": {
        "Global": {
            "D2D": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0},
            "COP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0},
            "SCOP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0}
        },
        "Units":{
            "1": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "2": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "3": {
                "D2D": {"attack": -0.2, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": -0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": -0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "4": {
                "D2D": {"attack": -0.2, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": -0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": -0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "5": {
                "D2D": {"attack": -0.2, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": -0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": -0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "6": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "7": {
                "D2D": {"attack": 0.2, "defense": 0, "move": 0, "range": 1},
                "COP": {"attack": 0.5, "defense": 0.1, "move": 0, "range": 2},
                "SCOP": {"attack": 0.5, "defense": 0.1, "move": 0, "range": 3}
            },
            "8": {
                "D2D": {"attack": 0.2, "defense": 0, "move": 0, "range": 1},
                "COP": {"attack": 0.5, "defense": 0.1, "move": 0, "range": 2},
                "SCOP": {"attack": 0.5, "defense": 0.1, "move": 0, "range": 3}
            },
            "9": {
                "D2D": {"attack": -0.2, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": -0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": -0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "10": {
                "D2D": {"attack": 0.2, "defense": 0, "move": 0, "range": 1},
                "COP": {"attack": 0.5, "defense": 0.1, "move": 0, "range": 2},
                "SCOP": {"attack": 0.5, "defense": 0.1, "move": 0, "range": 3}
            },
            "11": {
                "D2D": {"attack": -0.2, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": -0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": -0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "12": {
                "D2D": {"attack": -0.2, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": -0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": -0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "13": {
                "D2D": {"attack": -0.2, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": -0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": -0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "14": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "15": {
                "D2D": {"attack": 0.2, "defense": 0, "move": 0, "range": 1},
                "COP": {"attack": 0.5, "defense": 0.1, "move": 0, "range": 2},
                "SCOP": {"attack": 0.5, "defense": 0.1, "move": 0, "range": 3}
            },
            "16": {
                "D2D": {"attack": -0.2, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": -0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": -0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "17": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "18": {
                "D2D": {"attack": -0.2, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": -0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": -0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "28": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "29": {
                "D2D": {"attack": 0.2, "defense": 0, "move": 0, "range": 1},
                "COP": {"attack": 0.5, "defense": 0.1, "move": 0, "range": 2},
                "SCOP": {"attack": 0.5, "defense": 0.1, "move": 0, "range": 3}
            },
            "30": {
                "D2D": {"attack": -0.2, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": -0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": -0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "46": {
                "D2D": {"attack": -0.2, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": -0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": -0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "960900": {
                "D2D": {"attack": 0.2, "defense": 0, "move": 0, "range": 1},
                "COP": {"attack": 0.5, "defense": 0.1, "move": 0, "range": 2},
                "SCOP": {"attack": 0.5, "defense": 0.1, "move": 0, "range": 3}
            },
            "968731": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "1141438": {
                "D2D": {"attack": -0.2, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": -0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": -0.1, "defense": 0.1, "move": 0, "range": 0}
            }
        }
    },
    "Olaf": {
        "Global": {
            "D2D": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0},
            "COP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0},
            "SCOP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0}
        },
        "Units":{
            "1": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "2": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "3": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "4": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "5": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "6": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "7": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "8": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "9": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "10": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "11": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "12": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "13": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "14": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "15": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "16": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "17": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "18": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "28": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "29": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "30": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "46": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "960900": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "968731": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "1141438": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            }
        }
    },
    "Sasha": {
        "Global": {
            "D2D": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0},
            "COP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0},
            "SCOP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0}
        },
        "Units":{
            "1": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "2": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "3": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "4": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "5": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "6": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "7": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "8": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "9": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "10": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "11": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "12": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "13": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "14": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "15": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "16": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "17": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "18": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "28": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "29": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "30": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "46": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "960900": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "968731": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "1141438": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            }
        }
    },
    "Drake": {
        "Global": {
            "D2D": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0},
            "COP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0},
            "SCOP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0}
        },
        "Units":{
            "1": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "2": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "3": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "4": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "5": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "6": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "7": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "8": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "9": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "10": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "11": {
                "D2D": {"attack": -0.3, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": -0.2, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": -0.2, "defense": 0.1, "move": 0, "range": 0}
            },
            "12": {
                "D2D": {"attack": -0.3, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": -0.2, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": -0.2, "defense": 0.1, "move": 0, "range": 0}
            },
            "13": {
                "D2D": {"attack": -0.3, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": -0.2, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": -0.2, "defense": 0.1, "move": 0, "range": 0}
            },
            "14": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "15": {
                "D2D": {"attack": 0, "defense": 0.1, "move": 1, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.2, "move": 1, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.2, "move": 1, "range": 0}
            },
            "16": {
                "D2D": {"attack": 0, "defense": 0.1, "move": 1, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.2, "move": 1, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.2, "move": 1, "range": 0}
            },
            "17": {
                "D2D": {"attack": 0, "defense": 0.1, "move": 1, "range": 0},
                "COP": {"attack": 0, "defense": 0.2, "move": 1, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.2, "move": 1, "range": 0}
            },
            "18": {
                "D2D": {"attack": 0, "defense": 0.1, "move": 1, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.2, "move": 1, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.2, "move": 1, "range": 0}
            },
            "28": {
                "D2D": {"attack": 0, "defense": 0.1, "move": 1, "range": 0},
                "COP": {"attack": 0, "defense": 0.2, "move": 1, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.2, "move": 1, "range": 0}
            },
            "29": {
                "D2D": {"attack": 0, "defense": 0.1, "move": 1, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.2, "move": 1, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.2, "move": 1, "range": 0}
            },
            "30": {
                "D2D": {"attack": -0.3, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": -0.2, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": -0.2, "defense": 0.1, "move": 0, "range": 0}
            },
            "46": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "960900": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "968731": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "1141438": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            }
        }
    },
    "Eagle": {
        "Global": {
            "D2D": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0},
            "COP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0},
            "SCOP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0}
        },
        "Units":{
            "1": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "2": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "3": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "4": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "5": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "6": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "7": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "8": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "9": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "10": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "11": {
                "D2D": {"attack": 0.15, "defense": 0.1, "move": 0, "range": 0},
                "COP": {"attack": 0.3, "defense": 0.3, "move": 0, "range": 0},
                "SCOP": {"attack": 0.3, "defense": 0.3, "move": 0, "range": 0}
            },
            "12": {
                "D2D": {"attack": 0.15, "defense": 0.1, "move": 0, "range": 0},
                "COP": {"attack": 0.3, "defense": 0.3, "move": 0, "range": 0},
                "SCOP": {"attack": 0.3, "defense": 0.3, "move": 0, "range": 0}
            },
            "13": {
                "D2D": {"attack": 0.15, "defense": 0.1, "move": 0, "range": 0},
                "COP": {"attack": 0.3, "defense": 0.3, "move": 0, "range": 0},
                "SCOP": {"attack": 0.3, "defense": 0.3, "move": 0, "range": 0}
            },
            "14": {
                "D2D": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.3, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.3, "move": 0, "range": 0}
            },
            "15": {
                "D2D": {"attack": -0.3, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": -0.2, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": -0.2, "defense": 0.1, "move": 0, "range": 0}
            },
            "16": {
                "D2D": {"attack": -0.3, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": -0.2, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": -0.2, "defense": 0.1, "move": 0, "range": 0}
            },
            "17": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "18": {
                "D2D": {"attack": -0.3, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": -0.2, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": -0.2, "defense": 0.1, "move": 0, "range": 0}
            },
            "28": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "29": {
                "D2D": {"attack": -0.3, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": -0.2, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": -0.2, "defense": 0.1, "move": 0, "range": 0}
            },
            "30": {
                "D2D": {"attack": 0.15, "defense": 0.1, "move": 0, "range": 0},
                "COP": {"attack": 0.3, "defense": 0.3, "move": 0, "range": 0},
                "SCOP": {"attack": 0.3, "defense": 0.3, "move": 0, "range": 0}
            },
            "46": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "960900": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "968731": {
                "D2D": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.3, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.3, "move": 0, "range": 0}
            },
            "1141438": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            }
        }
    },
    "Javier": {
        "Global": {
            "D2D": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0.2, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0},
            "COP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0.4, "tower_multiplier": 2, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0},
            "SCOP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0.8, "tower_multiplier": 3, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0}
        },
        "Units":{
            "1": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "2": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "3": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "4": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "5": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "6": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "7": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "8": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "9": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "10": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "11": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "12": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "13": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "14": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "15": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "16": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "17": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "18": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "28": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "29": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "30": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "46": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "960900": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "968731": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "1141438": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            }
        }
    },
    "Jess": {
        "Global": {
            "D2D": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0},
            "COP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0},
            "SCOP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0}
        },
        "Units":{
            "1": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "2": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "3": {
                "D2D": {"attack": 0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.3, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.5, "defense": 0.1, "move": 2, "range": 0}
            },
            "4": {
                "D2D": {"attack": 0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.3, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.5, "defense": 0.1, "move": 2, "range": 0}
            },
            "5": {
                "D2D": {"attack": 0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.3, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.5, "defense": 0.1, "move": 2, "range": 0}
            },
            "6": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 2, "range": 0}
            },
            "7": {
                "D2D": {"attack": 0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.3, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.5, "defense": 0.1, "move": 2, "range": 0}
            },
            "8": {
                "D2D": {"attack": 0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.3, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.5, "defense": 0.1, "move": 2, "range": 0}
            },
            "9": {
                "D2D": {"attack": 0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.3, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.5, "defense": 0.1, "move": 2, "range": 0}
            },
            "10": {
                "D2D": {"attack": 0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.3, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.5, "defense": 0.1, "move": 2, "range": 0}
            },
            "11": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "12": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "13": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "14": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "15": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "16": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "17": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "18": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "28": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "29": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "30": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "46": {
                "D2D": {"attack": 0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.3, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.5, "defense": 0.1, "move": 2, "range": 0}
            },
            "960900": {
                "D2D": {"attack": 0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.3, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.5, "defense": 0.1, "move": 2, "range": 0}
            },
            "968731": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "1141438": {
                "D2D": {"attack": 0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.3, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.5, "defense": 0.1, "move": 2, "range": 0}
            }
        }
    },
    "Grimm": {
        "Global": {
            "D2D": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0},
            "COP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0},
            "SCOP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0}
        },
        "Units":{
            "1": {
                "D2D": {"attack": 0.3, "defense": -0.2, "move": 0, "range": 0},
                "COP": {"attack": 0.6, "defense": -0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.9, "defense": -0.1, "move": 0, "range": 0}
            },
            "2": {
                "D2D": {"attack": 0.3, "defense": -0.2, "move": 0, "range": 0},
                "COP": {"attack": 0.6, "defense": -0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.9, "defense": -0.1, "move": 0, "range": 0}
            },
            "3": {
                "D2D": {"attack": 0.3, "defense": -0.2, "move": 0, "range": 0},
                "COP": {"attack": 0.6, "defense": -0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.9, "defense": -0.1, "move": 0, "range": 0}
            },
            "4": {
                "D2D": {"attack": 0.3, "defense": -0.2, "move": 0, "range": 0},
                "COP": {"attack": 0.6, "defense": -0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.9, "defense": -0.1, "move": 0, "range": 0}
            },
            "5": {
                "D2D": {"attack": 0.3, "defense": -0.2, "move": 0, "range": 0},
                "COP": {"attack": 0.6, "defense": -0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.9, "defense": -0.1, "move": 0, "range": 0}
            },
            "6": {
                "D2D": {"attack": 0, "defense": -0.2, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": -0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": -0.1, "move": 0, "range": 0}
            },
            "7": {
                "D2D": {"attack": 0.3, "defense": -0.2, "move": 0, "range": 0},
                "COP": {"attack": 0.6, "defense": -0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.9, "defense": -0.1, "move": 0, "range": 0}
            },
            "8": {
                "D2D": {"attack": 0.3, "defense": -0.2, "move": 0, "range": 0},
                "COP": {"attack": 0.6, "defense": -0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.9, "defense": -0.1, "move": 0, "range": 0}
            },
            "9": {
                "D2D": {"attack": 0.3, "defense": -0.2, "move": 0, "range": 0},
                "COP": {"attack": 0.6, "defense": -0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.9, "defense": -0.1, "move": 0, "range": 0}
            },
            "10": {
                "D2D": {"attack": 0.3, "defense": -0.2, "move": 0, "range": 0},
                "COP": {"attack": 0.6, "defense": -0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.9, "defense": -0.1, "move": 0, "range": 0}
            },
            "11": {
                "D2D": {"attack": 0.3, "defense": -0.2, "move": 0, "range": 0},
                "COP": {"attack": 0.6, "defense": -0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.9, "defense": -0.1, "move": 0, "range": 0}
            },
            "12": {
                "D2D": {"attack": 0.3, "defense": -0.2, "move": 0, "range": 0},
                "COP": {"attack": 0.6, "defense": -0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.9, "defense": -0.1, "move": 0, "range": 0}
            },
            "13": {
                "D2D": {"attack": 0.3, "defense": -0.2, "move": 0, "range": 0},
                "COP": {"attack": 0.6, "defense": -0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.9, "defense": -0.1, "move": 0, "range": 0}
            },
            "14": {
                "D2D": {"attack": 0, "defense": -0.2, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": -0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": -0.1, "move": 0, "range": 0}
            },
            "15": {
                "D2D": {"attack": 0.3, "defense": -0.2, "move": 0, "range": 0},
                "COP": {"attack": 0.6, "defense": -0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.9, "defense": -0.1, "move": 0, "range": 0}
            },
            "16": {
                "D2D": {"attack": 0.3, "defense": -0.2, "move": 0, "range": 0},
                "COP": {"attack": 0.6, "defense": -0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.9, "defense": -0.1, "move": 0, "range": 0}
            },
            "17": {
                "D2D": {"attack": 0, "defense": -0.2, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": -0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": -0.1, "move": 0, "range": 0}
            },
            "18": {
                "D2D": {"attack": 0.3, "defense": -0.2, "move": 0, "range": 0},
                "COP": {"attack": 0.6, "defense": -0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.9, "defense": -0.1, "move": 0, "range": 0}
            },
            "28": {
                "D2D": {"attack": 0, "defense": -0.2, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": -0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": -0.1, "move": 0, "range": 0}
            },
            "29": {
                "D2D": {"attack": 0.3, "defense": -0.2, "move": 0, "range": 0},
                "COP": {"attack": 0.6, "defense": -0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.9, "defense": -0.1, "move": 0, "range": 0}
            },
            "30": {
                "D2D": {"attack": 0.3, "defense": -0.2, "move": 0, "range": 0},
                "COP": {"attack": 0.6, "defense": -0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.9, "defense": -0.1, "move": 0, "range": 0}
            },
            "46": {
                "D2D": {"attack": 0.3, "defense": -0.2, "move": 0, "range": 0},
                "COP": {"attack": 0.6, "defense": -0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.9, "defense": -0.1, "move": 0, "range": 0}
            },
            "960900": {
                "D2D": {"attack": 0.3, "defense": -0.2, "move": 0, "range": 0},
                "COP": {"attack": 0.6, "defense": -0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.9, "defense": -0.1, "move": 0, "range": 0}
            },
            "968731": {
                "D2D": {"attack": 0, "defense": -0.2, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": -0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": -0.1, "move": 0, "range": 0}
            },
            "1141438": {
                "D2D": {"attack": 0.3, "defense": -0.2, "move": 0, "range": 0},
                "COP": {"attack": 0.6, "defense": -0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.9, "defense": -0.1, "move": 0, "range": 0}
            }
        }
    },
    "Kanbei": {
        "Global": {
            "D2D": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1.2, "attack_bonus_plain": 0},
            "COP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1.2, "attack_bonus_plain": 0},
            "SCOP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0.5, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1.2, "attack_bonus_plain": 0}
        },
        "Units":{
            "1": {
                "D2D": {"attack": 0.3, "defense": 0.3, "move": 0, "range": 0},
                "COP": {"attack": 0.5, "defense": 0.4, "move": 0, "range": 0},
                "SCOP": {"attack": 0.5, "defense": 0.6, "move": 0, "range": 0}
            },
            "2": {
                "D2D": {"attack": 0.3, "defense": 0.3, "move": 0, "range": 0},
                "COP": {"attack": 0.5, "defense": 0.4, "move": 0, "range": 0},
                "SCOP": {"attack": 0.5, "defense": 0.6, "move": 0, "range": 0}
            },
            "3": {
                "D2D": {"attack": 0.3, "defense": 0.3, "move": 0, "range": 0},
                "COP": {"attack": 0.5, "defense": 0.4, "move": 0, "range": 0},
                "SCOP": {"attack": 0.5, "defense": 0.6, "move": 0, "range": 0}
            },
            "4": {
                "D2D": {"attack": 0.3, "defense": 0.3, "move": 0, "range": 0},
                "COP": {"attack": 0.5, "defense": 0.4, "move": 0, "range": 0},
                "SCOP": {"attack": 0.5, "defense": 0.6, "move": 0, "range": 0}
            },
            "5": {
                "D2D": {"attack": 0.3, "defense": 0.3, "move": 0, "range": 0},
                "COP": {"attack": 0.5, "defense": 0.4, "move": 0, "range": 0},
                "SCOP": {"attack": 0.5, "defense": 0.6, "move": 0, "range": 0}
            },
            "6": {
                "D2D": {"attack": 0, "defense": 0.3, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.4, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.6, "move": 0, "range": 0}
            },
            "7": {
                "D2D": {"attack": 0.3, "defense": 0.3, "move": 0, "range": 0},
                "COP": {"attack": 0.5, "defense": 0.4, "move": 0, "range": 0},
                "SCOP": {"attack": 0.5, "defense": 0.6, "move": 0, "range": 0}
            },
            "8": {
                "D2D": {"attack": 0.3, "defense": 0.3, "move": 0, "range": 0},
                "COP": {"attack": 0.5, "defense": 0.4, "move": 0, "range": 0},
                "SCOP": {"attack": 0.5, "defense": 0.6, "move": 0, "range": 0}
            },
            "9": {
                "D2D": {"attack": 0.3, "defense": 0.3, "move": 0, "range": 0},
                "COP": {"attack": 0.5, "defense": 0.4, "move": 0, "range": 0},
                "SCOP": {"attack": 0.5, "defense": 0.6, "move": 0, "range": 0}
            },
            "10": {
                "D2D": {"attack": 0.3, "defense": 0.3, "move": 0, "range": 0},
                "COP": {"attack": 0.5, "defense": 0.4, "move": 0, "range": 0},
                "SCOP": {"attack": 0.5, "defense": 0.6, "move": 0, "range": 0}
            },
            "11": {
                "D2D": {"attack": 0.3, "defense": 0.3, "move": 0, "range": 0},
                "COP": {"attack": 0.5, "defense": 0.4, "move": 0, "range": 0},
                "SCOP": {"attack": 0.5, "defense": 0.6, "move": 0, "range": 0}
            },
            "12": {
                "D2D": {"attack": 0.3, "defense": 0.3, "move": 0, "range": 0},
                "COP": {"attack": 0.5, "defense": 0.4, "move": 0, "range": 0},
                "SCOP": {"attack": 0.5, "defense": 0.6, "move": 0, "range": 0}
            },
            "13": {
                "D2D": {"attack": 0.3, "defense": 0.3, "move": 0, "range": 0},
                "COP": {"attack": 0.5, "defense": 0.4, "move": 0, "range": 0},
                "SCOP": {"attack": 0.5, "defense": 0.6, "move": 0, "range": 0}
            },
            "14": {
                "D2D": {"attack": 0, "defense": 0.3, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.4, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.6, "move": 0, "range": 0}
            },
            "15": {
                "D2D": {"attack": 0.3, "defense": 0.3, "move": 0, "range": 0},
                "COP": {"attack": 0.5, "defense": 0.4, "move": 0, "range": 0},
                "SCOP": {"attack": 0.5, "defense": 0.6, "move": 0, "range": 0}
            },
            "16": {
                "D2D": {"attack": 0.3, "defense": 0.3, "move": 0, "range": 0},
                "COP": {"attack": 0.5, "defense": 0.4, "move": 0, "range": 0},
                "SCOP": {"attack": 0.5, "defense": 0.6, "move": 0, "range": 0}
            },
            "17": {
                "D2D": {"attack": 0, "defense": 0.3, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.4, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.6, "move": 0, "range": 0}
            },
            "18": {
                "D2D": {"attack": 0.3, "defense": 0.3, "move": 0, "range": 0},
                "COP": {"attack": 0.5, "defense": 0.4, "move": 0, "range": 0},
                "SCOP": {"attack": 0.5, "defense": 0.6, "move": 0, "range": 0}
            },
            "28": {
                "D2D": {"attack": 0, "defense": 0.3, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.4, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.6, "move": 0, "range": 0}
            },
            "29": {
                "D2D": {"attack": 0.3, "defense": 0.3, "move": 0, "range": 0},
                "COP": {"attack": 0.5, "defense": 0.4, "move": 0, "range": 0},
                "SCOP": {"attack": 0.5, "defense": 0.6, "move": 0, "range": 0}
            },
            "30": {
                "D2D": {"attack": 0.3, "defense": 0.3, "move": 0, "range": 0},
                "COP": {"attack": 0.5, "defense": 0.4, "move": 0, "range": 0},
                "SCOP": {"attack": 0.5, "defense": 0.6, "move": 0, "range": 0}
            },
            "46": {
                "D2D": {"attack": 0.3, "defense": 0.3, "move": 0, "range": 0},
                "COP": {"attack": 0.5, "defense": 0.4, "move": 0, "range": 0},
                "SCOP": {"attack": 0.5, "defense": 0.6, "move": 0, "range": 0}
            },
            "960900": {
                "D2D": {"attack": 0.3, "defense": 0.3, "move": 0, "range": 0},
                "COP": {"attack": 0.5, "defense": 0.4, "move": 0, "range": 0},
                "SCOP": {"attack": 0.5, "defense": 0.6, "move": 0, "range": 0}
            },
            "968731": {
                "D2D": {"attack": 0, "defense": 0.3, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.4, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.6, "move": 0, "range": 0}
            },
            "1141438": {
                "D2D": {"attack": 0.3, "defense": 0.3, "move": 0, "range": 0},
                "COP": {"attack": 0.5, "defense": 0.4, "move": 0, "range": 0},
                "SCOP": {"attack": 0.5, "defense": 0.6, "move": 0, "range": 0}
            }
        }
    },
    "Sensei": {
        "Global": {
            "D2D": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0},
            "COP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0},
            "SCOP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0}
        },
        "Units":{
            "1": {
                "D2D": {"attack": 0.4, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.5, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.5, "defense": 0.1, "move": 0, "range": 0}
            },
            "2": {
                "D2D": {"attack": 0.4, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.5, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.5, "defense": 0.1, "move": 0, "range": 0}
            },
            "3": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "4": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "5": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "6": {
                "D2D": {"attack": 0, "defense": 0, "move": 1, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 1, "range": 0}
            },
            "7": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "8": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "9": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "10": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "11": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "12": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "13": {
                "D2D": {"attack": 0.5, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.75, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.75, "defense": 0.1, "move": 0, "range": 0}
            },
            "14": {
                "D2D": {"attack": 0, "defense": 0, "move": 1, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 1, "range": 0}
            },
            "15": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "16": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "17": {
                "D2D": {"attack": 0, "defense": 0, "move": 1, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 1, "range": 0}
            },
            "18": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "28": {
                "D2D": {"attack": 0, "defense": 0, "move": 1, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 1, "range": 0}
            },
            "29": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "30": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "46": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "960900": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "968731": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "1141438": {
                "D2D": {"attack": -0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            }
        }
    },
    "Sonja": {
        "Global": {
            "D2D": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0.5, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 9, "unit_cost": 1, "attack_bonus_plain": 0},
            "COP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0.5, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 9, "unit_cost": 1, "attack_bonus_plain": 0},
            "SCOP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 9, "unit_cost": 1, "attack_bonus_plain": 0}
        },
        "Units":{
            "1": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "2": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "3": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "4": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "5": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "6": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "7": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "8": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "9": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "10": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "11": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "12": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "13": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "14": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "15": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "16": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "17": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "18": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "28": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "29": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "30": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "46": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "960900": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "968731": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "1141438": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            }
        }
    },
    "Adder": {
        "Global": {
            "D2D": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0},
            "COP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0},
            "SCOP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0}
        },
        "Units":{
            "1": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 0}
            },
            "2": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 0}
            },
            "3": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 0}
            },
            "4": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 0}
            },
            "5": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 0}
            },
            "6": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 2, "range": 0}
            },
            "7": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 0}
            },
            "8": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 0}
            },
            "9": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 0}
            },
            "10": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 0}
            },
            "11": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 0}
            },
            "12": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 0}
            },
            "13": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 0}
            },
            "14": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 2, "range": 0}
            },
            "15": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 0}
            },
            "16": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 0}
            },
            "17": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 2, "range": 0}
            },
            "18": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 0}
            },
            "28": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 2, "range": 0}
            },
            "29": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 0}
            },
            "30": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 0}
            },
            "46": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 0}
            },
            "960900": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 0}
            },
            "968731": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 2, "range": 0}
            },
            "1141438": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 0}
            }
        }
    },
    "Flak": {
        "Global": {
            "D2D": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 24, "bad_luck": 9, "unit_cost": 1, "attack_bonus_plain": 0},
            "COP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 49, "bad_luck": 19, "unit_cost": 1, "attack_bonus_plain": 0},
            "SCOP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 89, "bad_luck": 39, "unit_cost": 1, "attack_bonus_plain": 0}
        },
        "Units":{
            "1": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "2": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "3": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "4": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "5": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "6": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "7": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "8": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "9": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "10": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "11": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "12": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "13": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "14": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "15": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "16": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "17": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "18": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "28": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "29": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "30": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "46": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "960900": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "968731": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "1141438": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            }
        }
    },
    "Hawke": {
        "Global": {
            "D2D": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0},
            "COP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0},
            "SCOP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0}
        },
        "Units":{
            "1": {
                "D2D": {"attack": 0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.2, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.2, "defense": 0.1, "move": 0, "range": 0}
            },
            "2": {
                "D2D": {"attack": 0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.2, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.2, "defense": 0.1, "move": 0, "range": 0}
            },
            "3": {
                "D2D": {"attack": 0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.2, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.2, "defense": 0.1, "move": 0, "range": 0}
            },
            "4": {
                "D2D": {"attack": 0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.2, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.2, "defense": 0.1, "move": 0, "range": 0}
            },
            "5": {
                "D2D": {"attack": 0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.2, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.2, "defense": 0.1, "move": 0, "range": 0}
            },
            "6": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "7": {
                "D2D": {"attack": 0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.2, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.2, "defense": 0.1, "move": 0, "range": 0}
            },
            "8": {
                "D2D": {"attack": 0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.2, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.2, "defense": 0.1, "move": 0, "range": 0}
            },
            "9": {
                "D2D": {"attack": 0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.2, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.2, "defense": 0.1, "move": 0, "range": 0}
            },
            "10": {
                "D2D": {"attack": 0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.2, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.2, "defense": 0.1, "move": 0, "range": 0}
            },
            "11": {
                "D2D": {"attack": 0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.2, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.2, "defense": 0.1, "move": 0, "range": 0}
            },
            "12": {
                "D2D": {"attack": 0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.2, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.2, "defense": 0.1, "move": 0, "range": 0}
            },
            "13": {
                "D2D": {"attack": 0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.2, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.2, "defense": 0.1, "move": 0, "range": 0}
            },
            "14": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "15": {
                "D2D": {"attack": 0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.2, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.2, "defense": 0.1, "move": 0, "range": 0}
            },
            "16": {
                "D2D": {"attack": 0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.2, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.2, "defense": 0.1, "move": 0, "range": 0}
            },
            "17": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "18": {
                "D2D": {"attack": 0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.2, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.2, "defense": 0.1, "move": 0, "range": 0}
            },
            "28": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "29": {
                "D2D": {"attack": 0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.2, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.2, "defense": 0.1, "move": 0, "range": 0}
            },
            "30": {
                "D2D": {"attack": 0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.2, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.2, "defense": 0.1, "move": 0, "range": 0}
            },
            "46": {
                "D2D": {"attack": 0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.2, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.2, "defense": 0.1, "move": 0, "range": 0}
            },
            "960900": {
                "D2D": {"attack": 0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.2, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.2, "defense": 0.1, "move": 0, "range": 0}
            },
            "968731": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "1141438": {
                "D2D": {"attack": 0.1, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.2, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.2, "defense": 0.1, "move": 0, "range": 0}
            }
        }
    },
    "Jugger": {
        "Global": {
            "D2D": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 29, "bad_luck": 14, "unit_cost": 1, "attack_bonus_plain": 0},
            "COP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 54, "bad_luck": 24, "unit_cost": 1, "attack_bonus_plain": 0},
            "SCOP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 94, "bad_luck": 44, "unit_cost": 1, "attack_bonus_plain": 0}
        },
        "Units":{
            "1": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "2": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "3": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "4": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "5": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "6": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "7": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "8": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "9": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "10": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "11": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "12": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "13": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "14": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "15": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "16": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "17": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "18": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "28": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "29": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "30": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "46": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "960900": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "968731": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "1141438": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            }
        }
    },
    "Kindle": {
        "Global": {
            "D2D": {"attack_bonus_road": 0, "attack_bonus_prop": 0.4, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0},
            "COP": {"attack_bonus_road": 0, "attack_bonus_prop": 0.8, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0},
            "SCOP": {"attack_bonus_road": 0, "attack_bonus_prop": 1.3, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0}
        },
        "Units":{
            "1": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "2": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "3": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "4": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "5": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "6": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "7": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "8": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "9": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "10": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "11": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "12": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "13": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "14": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "15": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "16": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "17": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "18": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "28": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "29": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "30": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "46": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "960900": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "968731": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "1141438": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            }
        }
    },
    "Koal": {
        "Global": {
            "D2D": {"attack_bonus_road": 0.1, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0},
            "COP": {"attack_bonus_road": 0.2, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0},
            "SCOP": {"attack_bonus_road": 0.3, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0}
        },
        "Units":{
            "1": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 0}
            },
            "2": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 0}
            },
            "3": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 0}
            },
            "4": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 0}
            },
            "5": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 0}
            },
            "6": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 2, "range": 0}
            },
            "7": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 0}
            },
            "8": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 0}
            },
            "9": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 0}
            },
            "10": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 0}
            },
            "11": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 0}
            },
            "12": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 0}
            },
            "13": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 0}
            },
            "14": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 2, "range": 0}
            },
            "15": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 0}
            },
            "16": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 0}
            },
            "17": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 2, "range": 0}
            },
            "18": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 0}
            },
            "28": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 2, "range": 0}
            },
            "29": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 0}
            },
            "30": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 0}
            },
            "46": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 0}
            },
            "960900": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 0}
            },
            "968731": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 2, "range": 0}
            },
            "1141438": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 1, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 2, "range": 0}
            }
        }
    },
    "Lash": {
        "Global": {
            "D2D": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0},
            "COP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0},
            "SCOP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0}
        },
        "Units":{
            "1": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "2": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "3": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "4": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "5": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "6": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "7": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "8": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "9": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "10": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "11": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "12": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "13": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "14": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "15": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "16": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "17": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "18": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "28": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "29": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "30": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "46": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "960900": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            },
            "968731": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.1, "move": 0, "range": 0}
            },
            "1141438": {
                "D2D": {"attack": 0, "defense": 0, "move": 0, "range": 0},
                "COP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "SCOP": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0}
            }
        }
    },
    "Sturm": {
        "Global": {
            "D2D": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0},
            "COP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0},
            "SCOP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0}
        },
        "Missile": {
            "COP": {"unit_value": 4},
            "SCOP": {"unit_value": 8}
        },
        "Units": {
            "1": {
                "D2D": {"attack": -0.2, "defense": 0.2, "move": 0, "range": 0},
                "COP": {"attack": -0.1, "defense": 0.3, "move": 0, "range": 0},
                "SCOP": {"attack": -0.1, "defense": 0.3, "move": 0, "range": 0}
            },
            "2": {
                "D2D": {"attack": -0.2, "defense": 0.2, "move": 0, "range": 0},
                "COP": {"attack": -0.1, "defense": 0.3, "move": 0, "range": 0},
                "SCOP": {"attack": -0.1, "defense": 0.3, "move": 0, "range": 0}
            },
            "3": {
                "D2D": {"attack": -0.2, "defense": 0.2, "move": 0, "range": 0},
                "COP": {"attack": -0.1, "defense": 0.3, "move": 0, "range": 0},
                "SCOP": {"attack": -0.1, "defense": 0.3, "move": 0, "range": 0}
            },
            "4": {
                "D2D": {"attack": -0.2, "defense": 0.2, "move": 0, "range": 0},
                "COP": {"attack": -0.1, "defense": 0.3, "move": 0, "range": 0},
                "SCOP": {"attack": -0.1, "defense": 0.3, "move": 0, "range": 0}
            },
            "5": {
                "D2D": {"attack": -0.2, "defense": 0.2, "move": 0, "range": 0},
                "COP": {"attack": -0.1, "defense": 0.3, "move": 0, "range": 0},
                "SCOP": {"attack": -0.1, "defense": 0.3, "move": 0, "range": 0}
            },
            "6": {
                "D2D": {"attack": 0, "defense": 0.2, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.3, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.3, "move": 0, "range": 0}
            },
            "7": {
                "D2D": {"attack": -0.2, "defense": 0.2, "move": 0, "range": 0},
                "COP": {"attack": -0.1, "defense": 0.3, "move": 0, "range": 0},
                "SCOP": {"attack": -0.1, "defense": 0.3, "move": 0, "range": 0}
            },
            "8": {
                "D2D": {"attack": -0.2, "defense": 0.2, "move": 0, "range": 0},
                "COP": {"attack": -0.1, "defense": 0.3, "move": 0, "range": 0},
                "SCOP": {"attack": -0.1, "defense": 0.3, "move": 0, "range": 0}
            },
            "9": {
                "D2D": {"attack": -0.2, "defense": 0.2, "move": 0, "range": 0},
                "COP": {"attack": -0.1, "defense": 0.3, "move": 0, "range": 0},
                "SCOP": {"attack": -0.1, "defense": 0.3, "move": 0, "range": 0}
            },
            "10": {
                "D2D": {"attack": -0.2, "defense": 0.2, "move": 0, "range": 0},
                "COP": {"attack": -0.1, "defense": 0.3, "move": 0, "range": 0},
                "SCOP": {"attack": -0.1, "defense": 0.3, "move": 0, "range": 0}
            },
            "11": {
                "D2D": {"attack": -0.2, "defense": 0.2, "move": 0, "range": 0},
                "COP": {"attack": -0.1, "defense": 0.3, "move": 0, "range": 0},
                "SCOP": {"attack": -0.1, "defense": 0.3, "move": 0, "range": 0}
            },
            "12": {
                "D2D": {"attack": -0.2, "defense": 0.2, "move": 0, "range": 0},
                "COP": {"attack": -0.1, "defense": 0.3, "move": 0, "range": 0},
                "SCOP": {"attack": -0.1, "defense": 0.3, "move": 0, "range": 0}
            },
            "13": {
                "D2D": {"attack": -0.2, "defense": 0.2, "move": 0, "range": 0},
                "COP": {"attack": -0.1, "defense": 0.3, "move": 0, "range": 0},
                "SCOP": {"attack": -0.1, "defense": 0.3, "move": 0, "range": 0}
            },
            "14": {
                "D2D": {"attack": 0, "defense": 0.2, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.3, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.3, "move": 0, "range": 0}
            },
            "15": {
                "D2D": {"attack": -0.2, "defense": 0.2, "move": 0, "range": 0},
                "COP": {"attack": -0.1, "defense": 0.3, "move": 0, "range": 0},
                "SCOP": {"attack": -0.1, "defense": 0.3, "move": 0, "range": 0}
            },
            "16": {
                "D2D": {"attack": -0.2, "defense": 0.2, "move": 0, "range": 0},
                "COP": {"attack": -0.1, "defense": 0.3, "move": 0, "range": 0},
                "SCOP": {"attack": -0.1, "defense": 0.3, "move": 0, "range": 0}
            },
            "17": {
                "D2D": {"attack": 0, "defense": 0.2, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.3, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.3, "move": 0, "range": 0}
            },
            "18": {
                "D2D": {"attack": -0.2, "defense": 0.2, "move": 0, "range": 0},
                "COP": {"attack": -0.1, "defense": 0.3, "move": 0, "range": 0},
                "SCOP": {"attack": -0.1, "defense": 0.3, "move": 0, "range": 0}
            },
            "28": {
                "D2D": {"attack": 0, "defense": 0.2, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.3, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.3, "move": 0, "range": 0}
            },
            "29": {
                "D2D": {"attack": -0.2, "defense": 0.2, "move": 0, "range": 0},
                "COP": {"attack": -0.1, "defense": 0.3, "move": 0, "range": 0},
                "SCOP": {"attack": -0.1, "defense": 0.3, "move": 0, "range": 0}
            },
            "30": {
                "D2D": {"attack": -0.2, "defense": 0.2, "move": 0, "range": 0},
                "COP": {"attack": -0.1, "defense": 0.3, "move": 0, "range": 0},
                "SCOP": {"attack": -0.1, "defense": 0.3, "move": 0, "range": 0}
            },
            "46": {
                "D2D": {"attack": -0.2, "defense": 0.2, "move": 0, "range": 0},
                "COP": {"attack": -0.1, "defense": 0.3, "move": 0, "range": 0},
                "SCOP": {"attack": -0.1, "defense": 0.3, "move": 0, "range": 0}
            },
            "960900": {
                "D2D": {"attack": -0.2, "defense": 0.2, "move": 0, "range": 0},
                "COP": {"attack": -0.1, "defense": 0.3, "move": 0, "range": 0},
                "SCOP": {"attack": -0.1, "defense": 0.3, "move": 0, "range": 0}
            },
            "968731": {
                "D2D": {"attack": 0, "defense": 0.2, "move": 0, "range": 0},
                "COP": {"attack": 0, "defense": 0.3, "move": 0, "range": 0},
                "SCOP": {"attack": 0, "defense": 0.3, "move": 0, "range": 0}
            },
            "1141438": {
                "D2D": {"attack": -0.2, "defense": 0.2, "move": 0, "range": 0},
                "COP": {"attack": -0.1, "defense": 0.3, "move": 0, "range": 0},
                "SCOP": {"attack": -0.1, "defense": 0.3, "move": 0, "range": 0}
            }
        }
    },
    "Vonbolt": {
        "Global": {
            "D2D": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0},
            "COP": null,
            "SCOP": {"attack_bonus_road": 0, "attack_bonus_prop": 0, "counter_bonus": 0, "indirect_defense": 0, "tower_multiplier": 1, "good_luck": 9, "bad_luck": 0, "unit_cost": 1, "attack_bonus_plain": 0}
        },
        "Missile": {
            "SCOP": {"unit_value_stun": 3}
        },
        "Units": {
            "1": {
                "D2D": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "COP": null,
                "SCOP": {"attack": 0.2, "defense": 0.2, "move": 0, "range": 0}
            },
            "2": {
                "D2D": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "COP": null,
                "SCOP": {"attack": 0.2, "defense": 0.2, "move": 0, "range": 0}
            },
            "3": {
                "D2D": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "COP": null,
                "SCOP": {"attack": 0.2, "defense": 0.2, "move": 0, "range": 0}
            },
            "4": {
                "D2D": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "COP": null,
                "SCOP": {"attack": 0.2, "defense": 0.2, "move": 0, "range": 0}
            },
            "5": {
                "D2D": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "COP": null,
                "SCOP": {"attack": 0.2, "defense": 0.2, "move": 0, "range": 0}
            },
            "6": {
                "D2D": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "COP": null,
                "SCOP": {"attack": 0, "defense": 0.2, "move": 0, "range": 0}
            },
            "7": {
                "D2D": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "COP": null,
                "SCOP": {"attack": 0.2, "defense": 0.2, "move": 0, "range": 0}
            },
            "8": {
                "D2D": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "COP": null,
                "SCOP": {"attack": 0.2, "defense": 0.2, "move": 0, "range": 0}
            },
            "9": {
                "D2D": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "COP": null,
                "SCOP": {"attack": 0.2, "defense": 0.2, "move": 0, "range": 0}
            },
            "10": {
                "D2D": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "COP": null,
                "SCOP": {"attack": 0.2, "defense": 0.2, "move": 0, "range": 0}
            },
            "11": {
                "D2D": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "COP": null,
                "SCOP": {"attack": 0.2, "defense": 0.2, "move": 0, "range": 0}
            },
            "12": {
                "D2D": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "COP": null,
                "SCOP": {"attack": 0.2, "defense": 0.2, "move": 0, "range": 0}
            },
            "13": {
                "D2D": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "COP": null,
                "SCOP": {"attack": 0.2, "defense": 0.2, "move": 0, "range": 0}
            },
            "14": {
                "D2D": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "COP": null,
                "SCOP": {"attack": 0, "defense": 0.2, "move": 0, "range": 0}
            },
            "15": {
                "D2D": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "COP": null,
                "SCOP": {"attack": 0.2, "defense": 0.2, "move": 0, "range": 0}
            },
            "16": {
                "D2D": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "COP": null,
                "SCOP": {"attack": 0.2, "defense": 0.2, "move": 0, "range": 0}
            },
            "17": {
                "D2D": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "COP": null,
                "SCOP": {"attack": 0, "defense": 0.2, "move": 0, "range": 0}
            },
            "18": {
                "D2D": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "COP": null,
                "SCOP": {"attack": 0.2, "defense": 0.2, "move": 0, "range": 0}
            },
            "28": {
                "D2D": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "COP": null,
                "SCOP": {"attack": 0, "defense": 0.2, "move": 0, "range": 0}
            },
            "29": {
                "D2D": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "COP": null,
                "SCOP": {"attack": 0.2, "defense": 0.2, "move": 0, "range": 0}
            },
            "30": {
                "D2D": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "COP": null,
                "SCOP": {"attack": 0.2, "defense": 0.2, "move": 0, "range": 0}
            },
            "46": {
                "D2D": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "COP": null,
                "SCOP": {"attack": 0.2, "defense": 0.2, "move": 0, "range": 0}
            },
            "960900": {
                "D2D": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "COP": null,
                "SCOP": {"attack": 0.2, "defense": 0.2, "move": 0, "range": 0}
            },
            "968731": {
                "D2D": {"attack": 0, "defense": 0.1, "move": 0, "range": 0},
                "COP": null,
                "SCOP": {"attack": 0, "defense": 0.2, "move": 0, "range": 0}
            },
            "1141438": {
                "D2D": {"attack": 0.1, "defense": 0.1, "move": 0, "range": 0},
                "COP": null,
                "SCOP": {"attack": 0.2, "defense": 0.2, "move": 0, "range": 0}
            }
        }
    }
};
const AMMO_USE = [
    [0, 9, 6, 7, 13, 15, 28, 968731, 12, 29, 16, 11, 1, 17, 3, 2, 1141438, 10, 46, 960900, 5, 8, 30, 18, 14, 4],
    [9, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [7, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
    [13, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
    [15, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
    [28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [968731, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [12, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
    [29, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    [16, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [11, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1],
    [17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [3, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
    [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
    [1141438, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
    [10, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    [46, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
    [960900, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [5, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1],
    [8, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
    [30, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [18, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [4, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1]
];
const PRIMARY_DAMAGE = [
    [0, 9, 6, 7, 13, 15, 28, 968731, 12, 29, 16, 11, 1, 17, 3, 2, 1141438, 10, 46, 960900, 5, 8, 30, 18, 14, 4],
    [9, 45, 50, 50, 120, 0, 0, 120, 75, 0, 0, 65, 105, 0, 10, 105, 1, 55, 5, 25, 60, 55, 75, 0, 120, 25],
    [6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [7, 75, 70, 75, 0, 40, 55, 0, 0, 45, 65, 0, 90, 55, 45, 85, 15, 80, 40, 70, 80, 80, 0, 60, 0, 70],
    [13, 25, 60, 65, 65, 25, 25, 0, 0, 25, 55, 0, 75, 25, 25, 75, 10, 65, 20, 55, 55, 65, 0, 25, 95, 55],
    [15, 85, 80, 80, 0, 50, 95, 0, 0, 60, 95, 0, 95, 95, 55, 90, 25, 90, 50, 80, 90, 85, 0, 95, 0, 80],
    [28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [968731, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [12, 95, 105, 105, 0, 75, 95, 0, 0, 75, 85, 0, 110, 95, 95, 110, 35, 105, 90, 105, 105, 105, 0, 95, 0, 105],
    [29, 0, 0, 0, 115, 0, 0, 120, 100, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 115, 0],
    [16, 0, 0, 0, 0, 0, 25, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0],
    [11, 0, 0, 0, 100, 0, 0, 120, 100, 0, 0, 55, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 85, 0, 100, 0],
    [1, 5, 14, 15, 7, 0, 0, 0, 0, 0, 0, 0, 55, 0, 1, 45, 1, 25, 1, 5, 12, 25, 0, 0, 30, 5],
    [17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [3, 105, 105, 105, 12, 10, 35, 0, 0, 10, 45, 0, 105, 35, 55, 95, 25, 105, 45, 85, 105, 105, 0, 10, 45, 85],
    [2, 65, 75, 70, 9, 0, 0, 0, 0, 0, 0, 0, 65, 0, 15, 55, 5, 85, 15, 55, 85, 85, 0, 0, 35, 55],
    [1141438, 195, 195, 195, 22, 45, 105, 0, 0, 45, 65, 0, 135, 75, 125, 125, 65, 195, 115, 180, 195, 195, 0, 45, 55, 180],
    [10, 0, 0, 0, 120, 0, 0, 120, 100, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 120, 0],
    [46, 115, 125, 115, 22, 15, 40, 0, 0, 15, 50, 0, 125, 40, 75, 115, 35, 125, 55, 105, 125, 125, 0, 15, 55, 105],
    [960900, 85, 80, 80, 105, 55, 60, 120, 75, 60, 60, 65, 95, 60, 55, 90, 25, 90, 50, 80, 90, 85, 75, 85, 105, 80],
    [5, 4, 45, 45, 10, 0, 0, 0, 0, 0, 0, 0, 70, 0, 1, 65, 1, 28, 1, 6, 35, 55, 0, 0, 35, 6],
    [8, 85, 80, 80, 0, 55, 60, 0, 0, 60, 85, 0, 95, 60, 55, 90, 25, 90, 50, 80, 90, 85, 0, 85, 0, 80],
    [30, 50, 85, 75, 85, 45, 65, 120, 70, 45, 35, 45, 90, 65, 70, 90, 15, 85, 60, 80, 85, 85, 55, 55, 95, 75],
    [18, 0, 0, 0, 0, 55, 95, 0, 0, 75, 25, 0, 0, 95, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 0, 0],
    [14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [4, 65, 75, 70, 10, 1, 10, 0, 0, 1, 5, 0, 75, 10, 15, 70, 10, 85, 15, 55, 85, 85, 0, 1, 40, 55]
];
const SECONDARY_DAMAGE = [
    [0, 9, 6, 7, 13, 15, 28, 968731, 12, 29, 16, 11, 1, 17, 3, 2, 1141438, 10, 46, 960900, 5, 8, 30, 18, 14, 4],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [13, 6, 20, 25, 65, 0, 0, 0, 0, 0, 0, 0, 75, 0, 1, 75, 1, 35, 1, 6, 30, 35, 0, 0, 95, 6],
    [15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [968731, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [16, 0, 0, 0, 115, 0, 0, 120, 65, 0, 0, 55, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 115, 0],
    [11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [3, 7, 45, 45, 12, 0, 0, 0, 0, 0, 0, 0, 105, 0, 1, 95, 1, 35, 1, 8, 45, 55, 0, 0, 45, 8],
    [2, 6, 20, 32, 9, 0, 0, 0, 0, 0, 0, 0, 65, 0, 1, 55, 1, 35, 1, 6, 18, 35, 0, 0, 35, 6],
    [1141438, 17, 65, 65, 22, 0, 0, 0, 0, 0, 0, 0, 135, 0, 1, 125, 1, 55, 1, 10, 65, 75, 0, 0, 55, 10],
    [10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [46, 17, 65, 65, 22, 0, 0, 0, 0, 0, 0, 0, 125, 0, 1, 115, 1, 55, 1, 10, 65, 75, 0, 0, 55, 10],
    [960900, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [4, 5, 45, 45, 10, 0, 0, 0, 0, 0, 0, 0, 75, 0, 1, 70, 1, 30, 1, 6, 40, 55, 0, 0, 40, 6]
];
const CO_LIST = {
    "andy":{"co_name":"Andy","co_id":1},
    "grit":{"co_name":"Grit","co_id":2},
    "kanbei":{"co_name":"Kanbei","co_id":3},
    "drake":{"co_name":"Drake","co_id":5},
    "max":{"co_name":"Max","co_id":7},
    "sami":{"co_name":"Sami","co_id":8},
    "olaf":{"co_name":"Olaf","co_id":9},
    "eagle":{"co_name":"Eagle","co_id":10},
    "adder":{"co_name":"Adder","co_id":11},
    "hawke":{"co_name":"Hawke","co_id":12},
    "sensei":{"co_name":"Sensei","co_id":13},
    "jess":{"co_name":"Jess","co_id":14},
    "colin":{"co_name":"Colin","co_id":15},
    "lash":{"co_name":"Lash","co_id":16},
    "hachi":{"co_name":"Hachi","co_id":17},
    "sonja":{"co_name":"Sonja","co_id":18},
    "sasha":{"co_name":"Sasha","co_id":19},
    "grimm":{"co_name":"Grimm","co_id":20},
    "koal":{"co_name":"Koal","co_id":21},
    "jake":{"co_name":"Jake","co_id":22},
    "kindle":{"co_name":"Kindle","co_id":23},
    "nell":{"co_name":"Nell","co_id":24},
    "flak":{"co_name":"Flak","co_id":25},
    "jugger":{"co_name":"Jugger","co_id":26},
    "javier":{"co_name":"Javier","co_id":27},
    "rachel":{"co_name":"Rachel","co_id":28},
    "sturm":{"co_name":"Sturm","co_id":29},
    "vonbolt":{"co_name":"VonBolt","co_id":30}
};
const TERRAIN_LIST = {
    "plain": {"terrain_name":"Plain","terrain_id":1,"terrain_defense":1},
    "mountain": {"terrain_name":"Mountain","terrain_id":2,"terrain_defense":4},
    "wood": {"terrain_name":"Wood","terrain_id":3,"terrain_defense":2},
    "hroad": {"terrain_name":"HRoad","terrain_id":15,"terrain_defense":0},
    "city": {"terrain_name":"?City","terrain_id":34,"terrain_defense":3},
    "hriver": {"terrain_name":"HRiver","terrain_id":4,"terrain_defense":0},
    "hbridge": {"terrain_name":"HBridge","terrain_id":26,"terrain_defense":0},
    "sea": {"terrain_name":"Sea","terrain_id":28,"terrain_defense":0},
    "hshoal": {"terrain_name":"HShoal","terrain_id":29,"terrain_defense":0},
    "reef": {"terrain_name":"Reef","terrain_id":33,"terrain_defense":1},
    "base": {"terrain_name":"?Base","terrain_id":35,"terrain_defense":3},
    "airport": {"terrain_name":"?Airport","terrain_id":36,"terrain_defense":3},
    "port": {"terrain_name":"?Port","terrain_id":37,"terrain_defense":3},
    "comtower": {"terrain_name":"?ComTower","terrain_id":133,"terrain_defense":3},
    "lab": {"terrain_name":"?Lab","terrain_id":145,"terrain_defense":3},
    "hq": {"terrain_name":"?HQ","terrain_id":42,"terrain_defense":4}
};
const UNIT_LIST = {
    "infantry": {"units_name":"Infantry","units_id":1,"units_ammo":0,"cost":1000},
    "mech": {"units_name":"Mech","units_id":2,"units_ammo":3,"cost":3000},
    "md.tank": {"units_name":"Md.Tank","units_id":3,"units_ammo":8,"cost":16000},
    "tank": {"units_name":"Tank","units_id":4,"units_ammo":9,"cost":7000},
    "recon": {"units_name":"Recon","units_id":5,"units_ammo":0,"cost":4000},
    "apc": {"units_name":"APC","units_id":6,"units_ammo":0,"cost":5000},
    "artillery": {"units_name":"Artillery","units_id":7,"units_ammo":9,"cost":6000},
    "rocket": {"units_name":"Rocket","units_id":8,"units_ammo":6,"cost":15000},
    "anti-air": {"units_name":"Anti-Air","units_id":9,"units_ammo":9,"cost":8000},
    "missile": {"units_name":"Missile","units_id":10,"units_ammo":6,"cost":12000},
    "fighter": {"units_name":"Fighter","units_id":11,"units_ammo":9,"cost":20000},
    "bomber": {"units_name":"Bomber","units_id":12,"units_ammo":9,"cost":22000},
    "b-copter": {"units_name":"B-Copter","units_id":13,"units_ammo":6,"cost":9000},
    "t-copter": {"units_name":"T-Copter","units_id":14,"units_ammo":0,"cost":5000},
    "battleship": {"units_name":"Battleship","units_id":15,"units_ammo":9,"cost":28000},
    "cruiser": {"units_name":"Cruiser","units_id":16,"units_ammo":9,"cost":16000},
    "lander": {"units_name":"Lander","units_id":17,"units_ammo":0,"cost":12000},
    "sub": {"units_name":"Sub","units_id":18,"units_ammo":6,"cost":20000},
    "neotank": {"units_name":"Neotank","units_id":46,"units_ammo":9,"cost":22000},
    "piperunner": {"units_name":"Piperunner","units_id":960900,"units_ammo":9,"cost":20000},
    "blackbomb": {"units_name":"BlackBomb","units_id":968731,"units_ammo":0,"cost":25000},
    "megatank": {"units_name":"MegaTank","units_id":1141438,"units_ammo":3,"cost":28000},
    "blackboat": {"units_name":"BlackBoat","units_id":28,"units_ammo":0,"cost":7500},
    "stealth": {"units_name":"Stealth","units_id":30,"units_ammo":6,"cost":24000},
    "carrier": {"units_name":"Carrier","units_id":29,"units_ammo":9,"cost":30000}
};
const DEFAULT_ATTACKER = {
    "cities": 0,
    "co": {"co_name": "Andy", "co_id": 1},
    "country": {"code": "os", "name": "orangestar"},
    "funds": 0,
    "hp": 100,
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
    "hp": 100,
    "power": "N",
    "terrain": {"terrain_name": "Plain", "terrain_id": 1, "terrain_defense": 1},
    "towers": 0,
    "unit": {"units_ammo": 0, "units_name": "Infantry", "units_id": 1}
};

/////////////////////////////////////////////////////
// CalcNode                                        // 
/////////////////////////////////////////////////////
class CalcNode {
    constructor(attacker, defender, id, builtinCalc) {
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
        this.builtinCalc = builtinCalc;

        this.attackerNoAmmoToggled = false;
        this.defenderNoAmmoToggled = false;
        this.attackerAmmo = this.attacker.unit.units_ammo;
        this.defenderAmmo = this.defender.unit.units_ammo;
        this.attackerDisplayHP = attacker.hp;
        this.defenderDisplayHP = defender.hp;
        this.defenderMaxHP = 100;
        this.defenderMaxCities = 99;
        this.defenderMaxTowers = 99;
        this.isValid = true;
        this.selectingAttacker = false;
        this.selectingDefender = false;
        this.updateCalcResults();
    }

    // load node from data
    load(data, displayLuckSlider) {
        if (data) {
            this.attacker = data.attacker;
            this.defender = data.defender;
            this.attackerAmmo = data.attackerAmmo;
            this.attackerDisplayHP = data.attackerDisplayHP;
            this.attackerNoAmmoToggled = data.attackerNoAmmoToggled;
            this.defenderAmmo = data.defenderAmmo;
            this.defenderDisplayHP = data.defenderDisplayHP;
            this.defenderMaxCities = data.defenderMaxCities;
            this.defenderMaxHP = data.defenderMaxHP;
            this.defenderMaxTowers = data.defenderMaxTowers;
            this.defenderNoAmmoToggled = data.defenderNoAmmoToggled;
            this.depth = data.depth;
            this.height = data.height;
            this.id = data.id;
            this.isFocused = data.isFocused;
            this.isValid = data.isValid;
            this.width = data.width;
            this.y = data.y;
            this.x = data.x;

            for (const child of data.children) {
                const next = this.genNextNode(child.id, displayLuckSlider)
                next.load(child);
                this.add(next);
            }
        }
    }

    // dump data
    dump() {
        const data = {};
        data.attacker = this.attacker;
        data.defender = this.defender;

        const children = [];
        for (const child of this.children) {
            children.push(child.dump());
        }
        data.children = children;

        data.isFocused = this.isFocused;
        data.x = this.x;
        data.y = this.y;
        data.width = this.width;
        data.height = this.height;
        data.id = this.id;
        data.depth = this.depth;
        data.isValid = this.isValid;

        data.attackerNoAmmoToggled = this.attackerNoAmmoToggled;
        data.defenderNoAmmoToggled = this.defenderNoAmmoToggled;
        data.attackerAmmo = this.attackerAmmo;
        data.defenderAmmo = this.defenderAmmo;
        data.attackerDisplayHP = this.attackerDisplayHP;
        data.defenderDisplayHP = this.defenderDisplayHP;
        data.defenderMaxHP = this.defenderMaxHP;
        data.defenderMaxCities = this.defenderMaxCities;
        data.defenderMaxTowers = this.defenderMaxTowers;

        return data;
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
   
    generateHTML(safeModeOn, displayLuckSlider) {
        const colorNum = n => `<span style="color:${n < 0 ? 'red' : 'inherit'}">${n}%</span>`;
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
            const attackerNoSecondary = [1, 5, 6, 14, 17, 968731].includes(this.attacker.unit.units_id); //inf, recon, apc, bboat, lander, bbomb
            const attackerHP = this.builtinCalc.getDisplayHP(this.attacker);
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
                            ${(attackerHP > 9) ? '' : '<img src="terrain/aw2/' + attackerHP + '.gif" class="hp-display">'}
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
                    <div class="ammo-options" id="calc-plus-ammo-options"${attackerNoSecondary ? 'style="visibility: hidden;"' : ''}>
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
            const defenderNoSecondary = [1, 5, 6, 14, 17, 968731].includes(this.defender.unit.units_id); //inf, recon, apc, bboat, lander, bbomb
            const defenderHP = this.builtinCalc.getDisplayHP(this.defender);
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
                            ${(defenderHP > 9) ? '' : '<img src="terrain/aw2/' + defenderHP + '.gif" class="hp-display">'}
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
            const attackerDamageHtml = displayLuckSlider ? `
            <div class="attacker-damage">
                <div class="calc-plus-slider-display">
                    ${this.calcResults['attackDamageMin'] === this.calcResults['attackDamageMax'] ? '' : `
                    ${this.calcResults['attackDamageMin']}% 
                    <input type="range" class="calc-plus-damage-slider" min="${this.calcResults['attackDamageMin']}" max="${this.calcResults['attackDamageMax']}" value="${this.sliderDamage}">`}
                    ${this.calcResults['attackDamageMax']}%
                </div>
                <div>
                    <img src="terrain/fire.gif" class="fire">
                    <span class="calc-plus-slider-value">${this.sliderDamage}%</span>
                </div>
                <span><img src="terrain/coin.gif" class="gold-coin"> ${"TODO"}</span>
                <span><img src="${chrome.runtime.getURL('/images/luck_icon.png')}">${(this.getProbability(this.sliderDamage).toFixed(4)).toString().slice(0,6)}%</span>
            </div>
            ` : `
            <div class="attacker-damage">
                <img src="terrain/fire.gif" class="fire"> 
                <span>${this.calcResults['attackDamageMin'] === this.calcResults['attackDamageMax'] ? colorNum(this.calcResults['attackDamageMax']) : colorNum(this.calcResults['attackDamageMin']) + ' - ' + this.calcResults['attackDamageMax'] + '%'}</span> 
                <img src="terrain/coin.gif" class="gold-coin"> 
                <span class="funds-damage-display">${this.calcResults['attackFundsMin'] === this.calcResults['attackFundsMax'] ? this.calcResults['attackFundsMin'] : this.calcResults['attackFundsMin'] + ' - ' + this.calcResults['attackFundsMax']}</span>
            </div> `;
            resultsHtml = `
            <div class="calc-plus-results">
                <div class="calculator-damage">
                    ${attackerDamageHtml}
                    <div class="defender-damage">
                        <img src="terrain/fire.gif" class="fire">
                        <span><span class="bold">@${Math.max(0, Math.ceil((this.defenderDisplayHP - this.calcResults['attackDamageMax'])/10.0))}HP: </span>${this.calcResults['minCounterDamageMin'] === this.calcResults['minCounterDamageMax'] ? 
                        colorNum(this.calcResults['minCounterDamageMin']) : colorNum(this.calcResults['minCounterDamageMin']) + ' - ' + this.calcResults['minCounterDamageMax'] + '%'}</span>
                        ${Math.max(0, Math.ceil((this.defenderDisplayHP - this.calcResults['attackDamageMax'])/10.0)) === Math.max(0, Math.ceil((this.defenderDisplayHP - this.calcResults['attackDamageMin'])/10.0)) ?
                            '' : '<span><span class="bold">@' + Math.max(0, Math.ceil((this.defenderDisplayHP - Math.max(0, this.calcResults['attackDamageMin']))/10.0)) + 'HP: </span>' + ((this.calcResults['maxCounterDamageMin'] === this.calcResults['maxCounterDamageMax']) ? 
                            colorNum(this.calcResults['maxCounterDamageMin']) : colorNum(this.calcResults['maxCounterDamageMin']) + ' - ' + this.calcResults['maxCounterDamageMax'] + '%') + '</span>'}
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
                            '' : '<span><span class="bold">@' + Math.max(0, Math.ceil((this.defenderDisplayHP - Math.max(0, this.calcResults['attackDamageMin']))/10.0)) + 'HP: </span>' + ((this.calcResults['maxCounterDamageMin'] === this.calcResults['maxCounterDamageMax']) ? 
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

    getHTML(safeModeOn, displayLuckSlider) {
        try {
            let html = "";
            html += this.generateHTML(safeModeOn, displayLuckSlider);
            
            let focused = "";
            for (const child of this.children) {
                if (child.isFocused === false) {
                    html += child.getHTML(safeModeOn, displayLuckSlider);
                } else {
                    focused += child.getHTML(safeModeOn, displayLuckSlider);
                }
            }

            html += focused;
            return html;
        } catch (error) {
            // Handle the error here if needed
            console.error("Error in getHTML:", error);
        }
    }

    genNextNode(id, displayLuckSlider) { //returns node post attack
        let nextDefender = JSON.parse(JSON.stringify(this.defender));
        // Get damage the attack will do. If luck mode is on, use slider value; else use min value
        const attackerDamage = (displayLuckSlider) ? this.sliderDamage : Math.max(0, this.calcResults['attackDamageMin']);
        const maxHP = Math.max(0, this.defenderDisplayHP - attackerDamage);

        nextDefender['hp'] = maxHP;
        const nextAttacker = JSON.parse(JSON.stringify(DEFAULT_ATTACKER));
        nextAttacker.country = this.attacker.country;

        const newNode = new CalcNode(nextAttacker, nextDefender, id, this.builtinCalc);
        newNode.defenderMaxHP = maxHP;
        newNode.defenderDisplayHP = maxHP;

        newNode.defenderMaxCities = this.defender['cities'];
        newNode.defenderMaxTowers = this.defender['towers'];
        return newNode;
    }

    // sets this.calcResults
    updateCalcResults() {
        const attacker_ammo = this.attacker.unit.units_ammo;
        const defender_ammo = this.defender.unit.units_ammo;
        this.attacker.unit.units_ammo = (this.attackerNoAmmoToggled) ? 0 : 1;
        this.defender.unit.units_ammo = (this.defenderNoAmmoToggled) ? 0 : 1;
        this.calcResults = this.builtinCalc.calculate(this.attacker, this.defender);
        this.attacker.unit.units_ammo = attacker_ammo;
        this.defender.unit.units_ammo = defender_ammo;
    }

    refactor(displayLuckSlider) {
        if (!this.isValid) {
            this.removeFocus();
        }
        // await this.calculate(); //wait for calc
        this.updateCalcResults();
        const newChild = this.genNextNode(-1, displayLuckSlider);//this is discarded so id doesnt matter???
        for (const child of this.children) {
            const oldDefender = JSON.parse(JSON.stringify(child.defender))
            child.defender = JSON.parse(JSON.stringify(newChild.defender));
            //if luck mode, use slider val
            child.defenderMaxHP = newChild.defenderMaxHP;
            child.defenderDisplayHP = newChild.defenderDisplayHP;
            //TODO?????
            
            child.defenderMaxCities = newChild.defenderMaxCities;
            child.defenderMaxTowers = newChild.defenderMaxTowers;
            child.defenderNoAmmoToggled = this.defenderNoAmmoToggled;


            // for (const key in valueChanges) {
            //     const k = key.replace('a_', '').replace('d_', '');
            //     if (valueChanges[key]) {
            //         child.attacker[k] = this.attacker[k];
            //     } else if (key.startsWith('d_')) {
            //         child.defender[k] = oldDefender[k];
            //     }
            // }
            child.attacker['towers'] = this.attacker['towers'];
            child.attacker['cities'] = this.attacker['cities'];
            child.attacker['funds'] = this.attacker['funds'];
            child.attacker['power'] = this.attacker['power'];
            child.attacker['co'] = this.attacker['co'];
            child.defender['towers'] = oldDefender['towers'];
            child.defender['cities'] = oldDefender['cities'];

            // TODO: Add other info that carries over here
            
            child.isValid = (child.defenderDisplayHP > 0) && this.isValid;
            child.refactor(displayLuckSlider);
        }
    }
}

/////////////////////////////////////////////////////
// CalcTree                                        // 
/////////////////////////////////////////////////////
class CalcTree {
    constructor(id, builtinCalc) {
        this.builtinCalc = builtinCalc;
        this.root = new CalcNode(JSON.parse(JSON.stringify(DEFAULT_ATTACKER)), JSON.parse(JSON.stringify(DEFAULT_DEFENDER)), id, builtinCalc);
        this.root.isRoot = true;
        this.activeNode = this.root;
        this.root.orient(0,0);
    }

    // get dict with tree data
    dump() {
        return {"root":this.root.dump()};
    }

    //refactor the active node
    refactor(displayLuckSlider) {
        this.activeNode.refactor(displayLuckSlider);
    }

    //returns html of each node
    getHTML(safeModeOn, displayLuckSlider) {
        return this.root.getHTML(safeModeOn, displayLuckSlider);
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
// BuiltinCalculator                               //
/////////////////////////////////////////////////////
class BuiltinCalculator {
    constructor() {}
    
    // return dict containing min/max attack and counter damage
    calculate(attacker, defender) {
        let result = {
            'attackDamageMin': 0, 
            'attackDamageMax': 0, 
            'attackFundsMin': 0,
            'attackFundsMax': 0,

            'minCounterDamageMin': 0,
            'minCounterDamageMax': 0,
            'minCounterFundsMin': 0,
            'minCounterFundsMax': 0,

            'maxCounterDamageMin': 0,
            'maxCounterDamageMax': 0,
            'maxCounterFundsMin': 0,
            'maxCounterFundsMax': 0
        };
        if (!this.canAttack(attacker, defender)) {
            return result;
        }
        let attack = this.calc(attacker, defender, false);
        result.attackDamageMin = attack.min;
        result.attackDamageMax = attack.max;
        result.attackFundsMin = this.getDamageCost(defender, attack.min);
        result.attackFundsMax = this.getDamageCost(defender, attack.max);

        let counter = {"max":0, "min":0};
        const attack_min = Math.max(attack.max, 0);
        const attack_max = Math.max(attack.min, 0);
        if (this.canCounter(attacker, defender)) {
            // min attack (min counter)
            if (attack_min < defender.hp) {
                defender.hp -= attack_min;
                counter = this.calc(defender, attacker, true);
                defender.hp += attack_min;
                
                result.minCounterDamageMin = counter.min;
                result.minCounterDamageMax = counter.max;
                result.minCounterFundsMin = this.getDamageCost(attacker, counter.min);
                result.minCounterFundsMax = this.getDamageCost(attacker, counter.max);
            }

            // max attack (max counter)
            if (attack_max < defender.hp) {
                defender.hp -= attack_max;
                counter = this.calc(defender, attacker, true);
                defender.hp += attack_max;

                result.maxCounterDamageMin = counter.min;
                result.maxCounterDamageMax = counter.max;
                result.maxCounterFundsMin = this.getDamageCost(attacker, counter.min);
                result.maxCounterFundsMax = this.getDamageCost(attacker, counter.max);
            }
        }
        // console.log("Attacker:", attacker, "\nDefender:", defender, "\nResult:", result);
        return result;
    }

    // get min/max damage values of an attack
    // negative values can result from negative luck
    calc(attacker, defender, is_counter) {
        // Damage% = (B*Av/100 + L-Lb)*(HPa/10)*((200-(Dv+Dtr*HPd))/100)
        const base = this.getBase(attacker, defender);
        const attackValue = this.getAttack(attacker, is_counter);
        const minLuck = this.lookupGlobal(attacker, "bad_luck");
        const maxLuck = this.lookupGlobal(attacker, "good_luck");
        const attackerHP = this.getDisplayHP(attacker);
        const defenseValue = this.getDefense(defender, this.isIndirect(attacker));
        
        const minDamage = (base * attackValue / 100 - minLuck) * (attackerHP / 10) * ((200 - defenseValue) / 100);
        const maxDamage = (base * attackValue / 100 + maxLuck) * (attackerHP / 10) * ((200 - defenseValue) / 100);

        // rounding rule
        const minRounded = Math.trunc(Math.ceil(minDamage / 0.05 + 0.00001) * 0.05);
        const maxRounded = Math.trunc(Math.ceil(maxDamage / 0.05 + 0.00001) * 0.05);

        return {"min": minRounded, "max": maxRounded};
    }

    // returns true if defender can counter attacker
    canCounter(attacker, defender) {
        if (this.canAttack(defender, attacker)) {
            return !this.isIndirect(defender) && !this.isIndirect(attacker);
        } else {
            return false;
        }
    }

    // get base attack damage
    getBase(attacker, defender) {
        if(this.lookupAttackData(attacker, defender, "AMMO") && (UNIT_LIST[attacker.unit.units_name.toLowerCase()].units_ammo === 0 || attacker.unit.units_ammo > 0)) {
            return this.lookupAttackData(attacker, defender, "PRIMARY"); // primary weapon
        } else {
            return this.lookupAttackData(attacker, defender, "SECONDARY"); // secondary weapon
        }
    }

    // get attack as percentage. 100 = no firepower boost
    getAttack(attacker, is_counter) {
        // CO D2D/COP/SCOP
        let coBonus = this.lookupUnit(attacker, "attack");

        // towers
        let towerBonus = attacker.towers / 10;

        // Jake plains bonus
        if (attacker.co.co_name === "Jake") {
            coBonus += ["plain", "hpiperubble", "vpiperubble"].includes(attacker.terrain.terrain_name.toLowerCase()) ? this.lookupGlobal(attacker, "attack_bonus_plain") : 0;
        } 
        // colin power of money
        else if (attacker.co.co_name === "Colin") {
            coBonus += 3 * attacker.funds / 100000;
        }
        // kindle
        else if (attacker.co.co_name === "Kindle") {
            // urban bonus
            coBonus += (this.onProp(attacker)) ? this.lookupGlobal(attacker, "attack_bonus_prop") : 0;
            // high society
            if (attacker.power === "S") {
                coBonus += 3 * attacker.cities / 100;    
            }
        }
        // koal
        else if (attacker.co.co_name === "Koal") {
            coBonus += (attacker.terrain.terrain_name.toLowerCase().includes("road")) ? this.lookupGlobal(attacker, "attack_bonus_road") : 0;
        }
        // lash
        else if (attacker.co.co_name === "Lash") {
            // no bonus for air units
            if (![11, 12, 13, 14, 30, 968731].includes(attacker.unit.units_id)) {
                let terrain_def = attacker.terrain.terrain_defense / 10;
                if (attacker.power === "S") {
                    // scop x2 bonus
                    terrain_def *= 2;
                }
                coBonus += terrain_def;
            }
        }
        // javier
        else if (attacker.co.co_name === "Javier") {
            towerBonus *= this.lookupGlobal(attacker, "tower_multiplier");
        }
        
        // Kanbei / Sonja counter 
        if (is_counter && ["Kanbei", "Sonja"].includes(attacker.co.co_name)) {
            const temp_power = attacker.power;
            attacker.power = "N";
            const d2d = 1 + this.lookupUnit(attacker, "attack");
            attacker.power = temp_power;
            const adjusted_bonus = 1 + towerBonus + coBonus - d2d;
            const counter = 1 + this.lookupGlobal(attacker, "counter_bonus");
            return Math.trunc(d2d * counter * 100 + adjusted_bonus * 100);
        } else {
            return Math.trunc(100 + coBonus * 100 + towerBonus * 100);
        }
    }

    // get defense as percentage. 100 = no defense boost
    getDefense(defender, attacker_direct) {
        // CO D2D/COP/SCOP
        let coBonus = this.lookupUnit(defender, "defense");

        // javier
        if (defender.co.co_name === "Javier") {
            let tower_defense = defender.towers / 10;
            tower_defense *= this.lookupGlobal(defender, "tower_multiplier");
            coBonus += tower_defense;

            // indirect defense
            if (!attacker_direct) {
                coBonus += this.lookupGlobal(defender, "indirect_defense");
            }
        }

        // terrain
        let terrain_def;
        if ([11, 12, 13, 14, 30, 968731].includes(defender.unit.units_id)) {
            terrain_def = 0;
        } else {
            terrain_def = defender.terrain.terrain_defense * this.getDisplayHP(defender) / 100;

            // lash scop
            if (defender.co.co_name === "Lash" && defender.power === "S") {
                terrain_def *= 2;
            }
        }

        return Math.trunc(100 + coBonus * 100 + terrain_def * 100);
    }

    // true if attack is valid, attacker can damage defender and has ammo
    canAttack(attacker, defender) {
        return !(
            (this.lookupAttackData(attacker, defender, "PRIMARY") === 0 &&
            this.lookupAttackData(attacker, defender, "SECONDARY") === 0)
            ||
            ((attacker.unit.units_ammo === 0 && UNIT_LIST[attacker.unit.units_name.toLowerCase()].units_ammo > 0) &&
            this.lookupAttackData(attacker, defender, "SECONDARY") === 0)
        );
    }
    
    // lookup global data
    lookupGlobal(unit, key) {
        const power = (unit.power === "N") ? "D2D" : (unit.power === "Y") ? "COP" : "SCOP";
        return CO_DATA[unit.co.co_name]["Global"][power][key];
    }

    // lookup unit specific data
    lookupUnit(unit, key) {
        const power = (unit.power === "N") ? "D2D" : (unit.power === "Y") ? "COP" : "SCOP";
        return CO_DATA[unit.co.co_name]["Units"][unit.unit.units_id][power][key]
    }

    // get HP as displayed on map
    getDisplayHP(unit) {
        return Math.ceil(unit.hp/10);
    }

    // True if unit is an indirect
    isIndirect(unit) {
        // arty, rocket, missile, bship, piperunner, carrier
        return [7, 8, 10, 15, 960900, 29].includes(unit.unit.units_id);
    }

    // True if unit terrain is a property
    onProp(unit) {
        return (unit.terrain.terrain_defense === 3 && !unit.unit.units_name.toLowerCase().includes("silo")) ||
               (unit.terrain.terrain_defense === 4 && unit.unit.units_name.toLowerCase().includes("hq"));
    }

    // returns cost of unit damage (defender charge)
    getDamageCost(unit, damage) {
        if (damage <= 0 ) {
            return 0;
        }

        const old_hp = unit.hp;
        const old_display = this.getDisplayHP(unit);
        
        let hp_delta;
        if (damage >= old_hp) {
            // unit killed
            hp_delta = old_display;
        } else {
            const new_hp = old_hp - damage;
            unit.hp = new_hp;
            const new_display = this.getDisplayHP(unit);
            unit.hp = old_hp;
            hp_delta = old_display - new_display;
        }
        // get cost
        const cost_per_hp = this.lookupGlobal(unit, "unit_cost") * UNIT_LIST[unit.unit.units_name.toLowerCase()].cost / 10;
        return cost_per_hp * hp_delta;
    }

    // look up unit attack data by attacker and defender unit id
    lookupAttackData(attacker, defender, key) {
        const row = [0, 9, 6, 7, 13, 15, 28, 968731, 12, 29, 16, 11, 1, 17, 3, 2, 1141438, 10, 46, 960900, 5, 8, 30, 18, 14, 4].indexOf(attacker.unit.units_id);
        const col = [0, 9, 6, 7, 13, 15, 28, 968731, 12, 29, 16, 11, 1, 17, 3, 2, 1141438, 10, 46, 960900, 5, 8, 30, 18, 14, 4].indexOf(defender.unit.units_id);
        switch(key) {
            case "PRIMARY":
                return PRIMARY_DAMAGE[row][col];
            case "SECONDARY":
                return SECONDARY_DAMAGE[row][col];
            case "AMMO":
                return AMMO_USE[row][col];
        }
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
        this.displaySlider = false;
        this.displayDevOptions = false;
        this.overlay = null; // handled by buildCalculator()
        this.tileInfo = null;
        this.zindex = Z_INDEX;
        this.builtinCalc = new BuiltinCalculator();
        this.addNewTree();
        this.buildCalculator();
        this.currentElement = null;
        this.currentNode = null;
        this.clickSelectMode = 'N'; //N: None, A: Attacker, D: Defender
        this.clickedUnit = null;
        this.isMenuOpen = {
            'select-co': false,
            'select-terrain': false,
            'select-unit': false
        };
    }

    // load session
    loadSession() {
        const data = JSON.parse(sessionStorage.getItem(SESSION_DATA_KEY));
        // console.log("Loading: ", data);
        if (data) {
            // clear default root
            this.deleteNode(0);
            // load data
            this.nextID = data.nextID;
            this.zindex = data.zindex;
            // dev options
            this.safeModeOn = !data.safeModeOn;
            this.toggleSafeMode();
            this.displaySlider = data.displaySlider;
            this.displayDevOptions = data.displayDevOptions;
            if (data.displayDevOptions) {
                this.displayDevOptions = false;
                this.toggleDevOptions();
            }
            // element data
            const calc = document.getElementById("calc-plus");
            calc.style.width = data.width;
            calc.style.height = data.height;
            calc.style.display = data.display;
            // build trees
            for (const tree of data.trees) {
                this.addNewTree();
                this.activeNode.load(tree.root, data.displaySlider);
                this.activeCalcTree.length = tree.length;
                this.activeCalcTree.root.refactor();
                this.activeCalcTree.root.orient(0,0);
            }
            
            const calcDisplay = document.getElementById("calc-plus-display");
            calcDisplay.innerHTML = this.getInnerHTML();
        }
    }

    // save session
    saveSession() {
        const data = {};
        // calc data
        data.nextID = this.nextID;
        data.safeModeOn = this.safeModeOn;
        data.displaySlider = this.displaySlider;
        data.displayDevOptions = this.displayDevOptions;
        data.zindex = this.zindex;
        // element data
        const calc = document.getElementById("calc-plus");
        data.width = calc.style.width;
        data.height = calc.style.height;
        data.display = calc.style.display;
        // trees
        const trees = [];
        for (const tree of this.calcTreeList) {
            trees.push(tree.dump());
        }
        data.trees = trees;

        // console.log("Saving: ", data);
        sessionStorage.setItem(SESSION_DATA_KEY, JSON.stringify(data));
    }

    //clear session
    clearSession() {
        sessionStorage.removeItem(SESSION_DATA_KEY);
    }

    //copy attacker and defender from old DC. returns bool
    copyFromDC(node) {
        // get old dc data
        let data = JSON.parse(sessionStorage.getItem("calculator"));
        
        if (data) {
            // attacker
            data.attacker.cities = parseInt(data.attacker.cities);
            data.attacker.co.co_id = parseInt(data.attacker.co.co_id);
            data.attacker.funds = parseInt(data.attacker.funds);
            data.attacker.hp = 10 * parseInt(data.attacker.hp);
            data.attacker.terrain.terrain_id = parseInt(data.attacker.terrain.terrain_id);
            data.attacker.terrain.terrain_defense = parseInt(data.attacker.terrain.terrain_defense);
            data.attacker.towers = parseInt(data.attacker.towers);
            data.attacker.unit.units_ammo = parseInt(data.attacker.unit.units_ammo);
            data.attacker.unit.units_id = parseInt(data.attacker.unit.units_id);
            node.attackerNoAmmoToggled = !data.attacker.hasAmmo;
            // defender
            data.defender.cities = parseInt(data.defender.cities);
            data.defender.co.co_id = parseInt(data.defender.co.co_id);
            data.defender.funds = parseInt(data.defender.funds);
            data.defender.hp = 10 * parseInt(data.defender.hp);
            data.defender.terrain.terrain_id = parseInt(data.defender.terrain.terrain_id);
            data.defender.terrain.terrain_defense = parseInt(data.defender.terrain.terrain_defense);
            data.defender.towers = parseInt(data.defender.towers);
            data.defender.unit.units_ammo = parseInt(data.defender.unit.units_ammo);
            data.defender.unit.units_id = parseInt(data.defender.unit.units_id);
            node.defenderNoAmmoToggled = !data.defender.hasAmmo;
                        
            node.attacker = data.attacker;
            node.defender = data.defender;
        } else {
            return false; //fail
        }
        return true;
    }   

    // toggle overlay for input hooking
    setOverlayHook(status) {
        if (status) {
            const gamemap = document.getElementById('map-background');
            const gamemap_rect = gamemap.getBoundingClientRect();
            this.overlay.style.top = gamemap_rect.top + "px";
            this.overlay.style.left = gamemap_rect.left + "px";
            this.overlay.style.width = gamemap_rect.width + "px";
            this.overlay.style.height = gamemap_rect.height + "px";
            this.overlay.style.zIndex = Z_INDEX - 2;
        } else {
            this.overlay.style.width = "0px";
            this.overlay.style.height = "0px";
            this.overlay.style.zIndex = -1;
        }
    }

    // toggle safe mode and swap out icon
    toggleSafeMode() {
        this.safeModeOn = !this.safeModeOn;
        const button = document.getElementById("calc-plus-safe");
        // if (!this.safeModeToggleVisible) {
        //     button.style.display = "none";
        // } else {
        //     button.style.display = "block";
        // }
        button.title = `Safe Mode is ${this.safeModeOn ? 'On' : 'Off'}. Click to toggle.`;
        const img = button.querySelector("img");
        img.src = chrome.runtime.getURL('/images/' + (this.safeModeOn ? 'lock' : 'unlock') + '_icon.png');
        const display = document.getElementById("calc-plus-display");
        display.innerHTML = this.getInnerHTML(); //refresh display
        this.saveSession(); //save session data
    }

    toggleSlider() {
        this.displaySlider = !this.displaySlider;
        const button = document.getElementById("calc-plus-slider-toggle");
        // if (!this.displaySliderToggleVisible) {
        //     button.style.display = "none";
        // } else {
        //     button.style.display = "block";
        // }
        button.title = `Luck display is ${this.displaySlider ? 'On' : 'Off'}. Click to toggle.`;
        const img = button.querySelector("img");
        img.src = chrome.runtime.getURL('/images/' + (this.displaySlider ? 'showing_luck' : 'hiding_luck') + '_icon.png');
        const display = document.getElementById("calc-plus-display");
        display.innerHTML = this.getInnerHTML(); //refresh display
        this.saveSession(); //save session data
    }

    // show/hide dev options
    toggleDevOptions() {
        this.displayDevOptions = !this.displayDevOptions;
        for (const id of ["calc-plus-safe", "calc-plus-clear"]) {
            const button = document.getElementById(id);
            button.style.display = this.displayDevOptions ? "block" : "none";
        }

        const display = document.getElementById("calc-plus-display");
        display.innerHTML = this.getInnerHTML(); //refresh display
        this.saveSession(); //save session data
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
    refactor() {
        this.activeCalcTree.refactor();
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
            html += `<div class="calc-plus-tree" style="width: ${this.calcTreeList[i].getWidth()}px; height: ${this.calcTreeList[i].getHeight()}px; top: ${y}px;">${this.calcTreeList[i].getHTML(this.safeModeOn, this.displaySlider)}</div>`;
            y += this.calcTreeList[i].getHeight() + TREE_OFFSET;
        }
        //add and copy button
        html += `<div class="calc-plus-ctrls-tray">
                    <div class="calc-plus-ctrls calc-plus-ctrls-new" title="New Calc">
                        <img src="${chrome.runtime.getURL('/images/new_calc_icon_20x20.png')}">
                    </div>
                    <div class="calc-plus-ctrls calc-plus-ctrls-copy" title="Copy From AWBW Damage Calculator">
                        <img src="${chrome.runtime.getURL('/images/copy_calc_icon_20x20.png')}">
                    </div>
                </div>`;
        return html;
    }

    addNewTree() {
        this.calcTreeList.push(new CalcTree(this.getNextID(), this.builtinCalc));
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

    // read input values from node
    updateInputs(node, element) {
        if (node && element) {
            //hp
            const hp = element.getElementsByClassName('hp-input');
            if (hp.length === 2) {
                node.attackerDisplayHP = (isNaN(parseInt(hp[0].value))) ? 1 : Math.max(1, Math.min(parseInt(hp[0].value), 100));
                node.defenderDisplayHP = (isNaN(parseInt(hp[1].value))) ? 1 : Math.max(1, Math.min(parseInt(hp[1].value), node.defenderMaxHP));
                node.attacker['hp'] = node.attackerDisplayHP;
                node.defender['hp'] = node.defenderDisplayHP;
            }
            //cities
            const cities = element.getElementsByClassName('city-input');
            if (cities.length === 2) {
                //valueChanges['a_cities'] = valueChanges['a_cities'] ? true : node.attacker['cities'] !== ((isNaN(parseInt(cities[0].value))) ? 0 : Math.max(0, parseInt(cities[0].value)));
                //valueChanges['d_cities'] = valueChanges['d_cities'] ? true : node.defender['cities'] !== ((isNaN(parseInt(cities[1].value))) ? 0 : Math.max(0, Math.min(parseInt(cities[1].value), node.defenderMaxCities)));
                
                node.attacker['cities'] = (isNaN(parseInt(cities[0].value))) ? 0 : Math.max(0, parseInt(cities[0].value));
                node.defender['cities'] = (isNaN(parseInt(cities[1].value))) ? 0 : Math.max(0, parseInt(cities[1].value));
            }
            //towers
            const towers = element.getElementsByClassName('tower-input');
            if (towers.length === 2) {
                //valueChanges['a_towers'] = valueChanges['a_towers'] ? true : node.attacker['towers'] !== ((isNaN(parseInt(towers[0].value))) ? 0 : Math.max(0, parseInt(towers[0].value)));
                //valueChanges['d_towers'] = valueChanges['d_towers'] ? true : node.defender['towers'] !== ((isNaN(parseInt(towers[1].value))) ? 0 : Math.max(0, Math.min(parseInt(towers[1].value), node.defenderMaxTowers)));

                node.attacker['towers'] = (isNaN(parseInt(towers[0].value))) ? 0 : Math.max(0, parseInt(towers[0].value));
                node.defender['towers'] = (isNaN(parseInt(towers[1].value))) ? 0 : Math.max(0, parseInt(towers[1].value));
            }
            //funds
            const funds = element.getElementsByClassName('funds-input');
            if (funds.length === 2) {
                //valueChanges['funds'] = valueChanges['funds'] ? true : node.attacker['funds'] !== ((isNaN(parseInt(funds[0].value))) ? 0 : Math.max(0, parseInt(funds[0].value)));
                
                node.attacker['funds'] = (isNaN(parseInt(funds[0].value))) ? 0 : Math.max(0, parseInt(funds[0].value));
                node.defender['funds'] = (isNaN(parseInt(funds[1].value))) ? 0 : Math.max(0, parseInt(funds[1].value));
            }
            //slider
            if (this.displaySlider) {
                const slider = element.querySelector('.calc-plus-damage-slider');
                node.sliderDamage = parseInt(slider.value);
            }
        }
        //return valueChanges;
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
        if (dc.style.display === 'flex') {
            // toggle off
            this.clickSelectMode = 'N';
            this.setOverlayHook(false);
            dc.style.display = 'none';
        } else {
            // toggle on
            dc.style.display = 'flex';
        }
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

    getData(unitElement) {
        //get game data
        let regex = /terrainInfo = (.*?);/;
        let match = regex.exec(document.documentElement.innerHTML);
        const terrain = JSON.parse(match[1].replace("|| {}", ""));

        regex = /buildingsInfo = (.*?);/;
        match = regex.exec(document.documentElement.innerHTML);
        const buildings = JSON.parse(match[1].replace("|| {}", ""));

        regex = /playersInfo = (.*?);/;
        match = regex.exec(document.documentElement.innerHTML);
        const players = JSON.parse(match[1].replace("|| {}", ""));

        // get unit position
        const row = Math.trunc(parseInt(unitElement.style.top)/TILE_SIZE);
        const col = Math.trunc(parseInt(unitElement.style.left)/TILE_SIZE);
        // get unit data
        let country = null;
        let name = null;
        let hp = null;
        let ammo = null;
        if (this.tileInfo) {
            // use tile info element
            const unit_img = this.tileInfo.querySelector(".unit-info-sprite img")?.src?.split("/").pop().split(".gif")[0];
            country = unit_img.substring(0, 2);
            name = unit_img.substring(2);
            hp = parseInt(this.tileInfo.querySelector(".unit-info-hp .amount")?.textContent || "10") || 10;
            const ammo_str = this.tileInfo.querySelector(".unit-info-ammo .amount")?.textContent;
            ammo = Number.isNaN(parseInt(ammo_str)) ? 1 : parseInt(ammo_str);
        } else {
            // use unit element
            const img_sources = [...unitElement.innerHTML.matchAll(/\/([^\/]+?)\.gif/g)].map(m => m[1]);
            for (const src of img_sources) {
                if (src.length === 1 && (parseInt(src) || src === '?')) {
                    hp = parseInt(src) || 10;
                }
                else if (Object.keys(UNIT_LIST).includes(src.substring(2))) {
                    country = src.substring(0,2);
                    name = src.substring(2);
                }
                if (name && hp) {
                    break;
                }
            }
            // no way to get this, use default ammo value
            ammo = UNIT_LIST[name].units_ammo;
        }
        // get player
        const player = Object.values(players).find(v => v.countries_code === country);
        // get tile
        const tile = terrain[col][row] || buildings[col][row];

        if (country && name && player && tile) {
            return {
                "cities": parseInt(player.numProperties) || 0,
                "co": {"co_name": player.co_name, "co_id": player.players_co_id},
                "country": {"code": player.countries_code, "name": player.countries_name.replace(' ', '').toLowerCase()},
                "funds": parseInt(player.players_funds) || 0,
                "hp": hp * 10,
                "power": player.players_co_power_on,
                "terrain": {"terrain_name": tile.terrain_name, "terrain_id": tile.terrain_id, "terrain_defense": tile.terrain_defense},
                "towers": parseInt(player.towers) || 0,
                "unit": {"units_ammo": ammo, "units_name": name, "units_id": UNIT_LIST[name].units_id}
            };
        } else {
            return null
        }
    }

    //add calc
    buildCalculator() {
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
                                Version ${CURRENT_VERSION}<br>
                                <a href="https://github.com/Sketch-Turner/AWBW-Damage-Calculator-Plus#table-of-contents" target="_blank">User Guide</a><br>
                                <a href="https://github.com/Sketch-Turner/AWBW-Damage-Calculator-Plus?#bugs" target="_blank">Bug Reporting</a><br>
                                See you on the Global League. Good luck, have fun!!
                            </div>
                        </div>
                        <!--
                        <div title="Luck display is ${this.displaySlider ? 'On' : 'Off'}. Click to toggle." id="calc-plus-slider-toggle" style="display: none; margin-top: 4px; margin-right: 9px; height: 16px;"><img src="${chrome.runtime.getURL('/images/' + (this.displaySlider ? 'showing_luck' : 'hiding_luck') + '_icon.png')}"></div>
                        -->
                        <div title="Safe Mode is ${this.safeModeOn ? 'On' : 'Off'}. Click to toggle." id="calc-plus-safe" style="display: none; margin-top: 4px; margin-right: 9px; height: 16px;"><img src="${chrome.runtime.getURL('/images/' + (this.safeModeOn ? 'lock' : 'unlock') + '_icon.png')}"></div>
                        <div title="Clear Session Data" id="calc-plus-clear" style="display: none; margin-top: 4px; margin-right: 9px; height: 16px;"><img src="${chrome.runtime.getURL('/images/clear_session_icon.png')}"></div>                        
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
        calculatorClose.addEventListener("click", () => {
            this.toggleCalculator();
            this.saveSession(); //save session data
        });
        const calculatorShrink = document.getElementById("calc-plus-shrink");
        calculatorShrink.addEventListener("click", () => {
            this.shrinkCalculator();
            this.saveSession(); //save session data
        });
        const calculatorGrow = document.getElementById("calc-plus-grow");
        calculatorGrow.addEventListener("click", () => {
            this.updateWindowSize();
            this.saveSession(); //save session data
        });
        const calculatorSafe = document.getElementById("calc-plus-safe");
        calculatorSafe.addEventListener("click", () => {
            this.toggleSafeMode();
            this.saveSession(); //save session data
        });
        const calculatorClear = document.getElementById("calc-plus-clear");
        calculatorClear.addEventListener("click", () => {
            this.clearSession();
        });

        // TODO luck slider
        // const calculatorSlider = document.getElementById("calc-plus-slider-toggle");
        // calculatorSlider.addEventListener("click", () => this.toggleSlider());

        const grabHeader = document.getElementById("calc-plus-header");
        const calcPlus = document.getElementById("calc-plus");

        //detect key press to show safe mode unlock
        document.addEventListener("keydown", (event) => {
            if (event.key === "+") {
                //TODO slider
                //this.displaySliderToggleVisible = !this.displaySliderToggleVisible;
                // this.displaySlider = true;
                //this.toggleSlider();

                // turn safe mode on when dev options are hidden
                if (this.displayDevOptions) {
                    this.safeModeOn = false; 
                    this.toggleSafeMode();                    
                }

                this.toggleDevOptions();
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

        //Create overlay used for unit click detection. Used to detect unit selections.
        const overlay = document.createElement("div");
        overlay.id = "calc-plus-overlay";
        overlay.style.position = "fixed";
        overlay.style.zIndex = -1;
        overlay.style.pointerEvents = "auto";
        // overlay.style.background = "rgba(255, 0, 0, 0.5)";
        overlay.style.background = "transparent";

        // Get unit from click
        const overlayClick = (event) => {
            // Temporary unhook to get top element
            this.setOverlayHook(false);
            // get unit element
            const underlying = document.elementFromPoint(event.clientX, event.clientY);
            const clickTarget = underlying.closest('.game-unit') || underlying.closest('span[id^="unit"]'); 
            // get tile info
            underlying.dispatchEvent(new MouseEvent("mousemove", {bubbles: true, clientX: event.clientX, clientY: event.clientY}));
            this.tileInfo = document.getElementsByClassName("tile-info left-side")[0];
            this.setOverlayHook(true);
            if (clickTarget) {
                this.clickedUnit = this.getData(clickTarget); //set values of this.clickedUnit
                // console.log("Clicked:", this.clickedUnit);
                if (this.clickedUnit) {
                    if (this.clickSelectMode === 'A') {
                        this.currentNode.attacker = JSON.parse(JSON.stringify(this.clickedUnit));
                        this.currentNode.attackerAmmo = this.currentNode.attacker.unit.units_ammo;
                        this.currentNode.attackerDisplayHP = this.currentNode.attacker.hp;
                        this.currentNode.selectingAttacker = false;
                        this.currentNode.attackerNoAmmoToggled = (this.clickedUnit.unit.units_ammo === 0);
                    }
                    else if (this.clickSelectMode === 'D') {
                        this.currentNode.defender = JSON.parse(JSON.stringify(this.clickedUnit));
                        this.currentNode.defenderAmmo = this.currentNode.defender.unit.units_ammo;
                        this.currentNode.defenderDisplayHP = this.currentNode.defender.hp;
                        this.currentNode.selectingDefender = false;
                        this.currentNode.defenderNoAmmoToggled = (this.clickedUnit.unit.units_ammo === 0);
                    }
                    this.clickSelectMode = 'N';
                    this.setOverlayHook(false);
                    this.currentNode.refactor(); //if current node calc has changed, need to update all children
                    this.orient();
                    calcDisplay.innerHTML = this.getInnerHTML(); // Update the display
                    this.saveSession(); //save session data
                }
            }
        };

        // Add event listener
        overlay.addEventListener('click', overlayClick, true); //move planner 
        document.body.appendChild(overlay);
        this.overlay = overlay;
      
        // Attach a single click event listener to the container  
        calcDisplay.addEventListener('click', (event) => {
            this.bringToFront();
        
            const addButton = event.target.closest('.calc-plus-ctrls-add');
            const deleteButton = event.target.closest('.calc-plus-ctrls-del');
            const newButton = event.target.closest('.calc-plus-ctrls-new');
            const copyButton = event.target.closest('.calc-plus-ctrls-copy');
            const svgNode = event.target.closest('.calc-plus-node');
            const toggleCOP = event.target.closest('.toggle-cop');
            const toggleSCOP = event.target.closest('.toggle-scop');
            const toggleAmmo = event.target.closest('.ammo-options');
            const selectCO = event.target.closest('.selected-co');
            const selectTerrain = event.target.closest('.selected-terrain');
            const selectUnit = event.target.closest('.selected-unit');
            const toggleClickSelect = event.target.closest('.calc-plus-select-attacker') ? event.target.closest('.calc-plus-select-attacker') : event.target.closest('.calc-plus-select-defender');
            const inputField = event.target.closest('.text-input');
            const damageSlider = event.target.closest('.calc-plus-damage-slider');
                   
            let updateDisplay = false; //need to reposition nodes
            let updateCalc = false; //need to run calc again
            let updateWindow = false; //need to resize window
            let updateHTML = false; //need to render
            //let valueChanges = {'a_towers': false, 'a_cities': false, 'funds': false, 'power': false, 'co': false, 'd_towers': false, 'd_cities': false};
            
            if (newButton || copyButton) {
                for (const key in this.isMenuOpen) {
                    this.closeMenu(key);//close all menus
                }
                this.addNewTree();
                this.currentNode = this.activeCalcTree.activeNode;
                if (copyButton) {
                    // copy from old dc
                    if (!this.copyFromDC(this.currentNode)) {
                        // delete node if data could not be retrieved
                        this.deleteNode(this.currentNode.id);
                    }
                }
                this.currentNode.refactor(); //update calc
                //this.orient();
                this.updateWindowSize(); //resize window
                calcDisplay.innerHTML = this.getInnerHTML();//update display
                this.saveSession(); //save session data
            } else if (svgNode) {
                //valueChanges = this.updateInputs(this.currentNode, this.currentElement, valueChanges);
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
                        updateDisplay = true;
                        updateWindow = true;
                    } else if (addButton && selectedNode.isValid) {
                        // Add
                        for (const key in this.isMenuOpen) {
                            this.closeMenu(key);//close all menus
                        }
                        //valueChanges = {'a_towers': true, 'a_cities': true, 'funds': true, 'power': true, 'co': true, 'd_towers': false, 'd_cities': false};
                        selectedNode.add(selectedNode.genNextNode(this.getNextID()));
                        updateCalc = true;
                        updateDisplay = true;
                        updateWindow = true;
                    } else if (toggleClickSelect && selectedNode.isValid) {
                        updateHTML = true;
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
                            this.setOverlayHook(true); // Bring overlay to front
                        } else {
                            this.clickSelectMode = 'N';
                            selectedNode.selectingAttacker = false;
                            selectedNode.selectingDefender = false;
                            this.setOverlayHook(false); // Send overlay to back
                        }
                    } else if (toggleCOP && selectedNode.isValid) {
                        updateCalc = true;
                        updateDisplay = true;
                        for (const key in this.isMenuOpen) {
                            this.closeMenu(key);//close all menus
                        }
                        
                        if (selectedNode.depth === 0 || !this.safeModeOn) { 
                            //changes to root are always allowed
                            if (toggleCOP.parentNode.parentNode.parentNode.parentNode.classList[0].replace('calculator-', '') === 'attack') {
                                selectedNode.attacker['power'] = (selectedNode.attacker['power'] !== 'Y') ? 'Y' : 'N';
                                //valueChanges['power'] = true;
                            } else {
                                selectedNode.defender['power'] = (selectedNode.defender['power'] !== 'Y') ? 'Y' : 'N';
                            }
                        } else if (selectedNode.parent.attacker['power'] === 'N' && toggleCOP.parentNode.parentNode.parentNode.parentNode.classList[0].replace('calculator-', '') === 'attack') {
                            //if parent power is not active, attacker can toggle    
                            selectedNode.attacker['power'] = (selectedNode.attacker['power'] !== 'Y') ? 'Y' : 'N';
                            //valueChanges['power'] = true;
                        }
                    } else if (toggleSCOP && selectedNode.isValid) {
                        updateCalc = true;
                        updateDisplay = true;
                        for (const key in this.isMenuOpen) {
                            this.closeMenu(key);//close all menus
                        }
                        
                        if (selectedNode.depth === 0 || !this.safeModeOn) { 
                            //changes to root are always allowed
                            if (toggleSCOP.parentNode.parentNode.parentNode.parentNode.classList[0].replace('calculator-', '') === 'attack') {
                                selectedNode.attacker['power'] = (selectedNode.attacker['power'] !== 'S') ? 'S' : 'N';
                                //valueChanges['power'] = true;
                            } else {
                                selectedNode.defender['power'] = (selectedNode.defender['power'] !== 'S') ? 'S' : 'N';
                            }
                        } else if (selectedNode.parent.attacker['power'] === 'N' && toggleSCOP.parentNode.parentNode.parentNode.parentNode.classList[0].replace('calculator-', '') === 'attack') {
                            //if parent power is not active, attacker can toggle    
                            selectedNode.attacker['power'] = (selectedNode.attacker['power'] !== 'S') ? 'S' : 'N';
                            //valueChanges['power'] = true;
                        }
                    } else if (toggleAmmo && selectedNode.isValid) {
                        updateCalc = true;
                        updateDisplay = true;
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
                        updateCalc = true;
                        updateDisplay = true;
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
                        updateCalc = true;
                        updateDisplay = true;
                        this.closeMenu('select-co');
                        this.closeMenu('select-unit');
                        //at root, safe mode off, or attacker can change
                        if (selectedNode.depth === 0 || !this.safeModeOn || selectTerrain.parentNode.parentNode.parentNode.classList[0].replace('calculator-', '') === 'attack') {
                            const menu = document.getElementById('calc-plus-select-terrain');
                            let newCountry;
                            if (selectTerrain.parentNode.parentNode.parentNode.classList[0].replace('calculator-', '') === 'attack') {
                                newCountry = this.currentNode.attacker['country']['name'].toLowerCase();
                            } else {
                                newCountry = this.currentNode.defender['country']['name'].toLowerCase();
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
                        updateCalc = true;
                        updateDisplay = true;
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
                        // updateCalc = true;
                        // for (const key in this.isMenuOpen) {
                        //     this.closeMenu(key);//close all menus
                        // }
                        
                        // valueChanges = this.updateInputs(this.currentNode, this.currentElement, valueChanges);

                    } else if (damageSlider && selectedNode.isValid) {
                        // updateHTML = true;
                        // for (const key in this.isMenuOpen) {
                        //     this.closeMenu(key);//close all menus
                        // }
                        // console.log('event1:' + this.currentNode.sliderDamage);

                        // this.currentNode.sliderDamage = damageSlider.value;
                        // console.log('event2:' + this.currentNode.sliderDamage);


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
                            updateDisplay = true;
                        }

                    }
                    //update new node values
                    //valueChanges = this.updateInputs(selectedNode, svgNode, valueChanges);
                    if (updateCalc) {
                        this.currentNode.refactor();//cascading update of current calc to all children
                    }
                    if (updateDisplay) {
                        this.orient(); //position and size node and all children correctly
                    }
                    if (updateWindow) {
                        this.updateWindowSize(); //resize window
                    }
                    if (updateCalc || updateDisplay || updateWindow || updateHTML) {
                        calcDisplay.innerHTML = this.getInnerHTML(); // update display
                        this.saveSession(); //save session data
                    }
                }
            }
        });

        //update slider val only
        calcDisplay.addEventListener("input", (event) => {
            if (event.target.classList.contains('calc-plus-damage-slider')) {
                const parentElement = event.target.closest('.attacker-damage');
                if (parentElement) {
                    const displaySpan = parentElement.querySelector('.calc-plus-slider-value');
                    if (displaySpan) {
                        displaySpan.textContent = event.target.value+'%';
                    }
                }
            }
        });

        // Attach a input change event listener
        calcDisplay.addEventListener("change", (event) => {
            const element = event.target.closest('.calc-plus-node');
            //let valueChanges = {'a_towers': false, 'a_cities': false, 'funds': false, 'power': false, 'co': false, 'd_towers': false, 'd_cities': false};
            if (element) {
                //this.updateInputs(this.currentNode, this.currentElement);//update current node before getting new
                //this.currentElement = svgNode;

                const id = parseInt(element.getAttribute('data-id'));
                const node = this.selectNode(id);
        
                if (node) {
                    //update current node values
                    //this.currentNode = selectedNode;
                    this.updateInputs(node, element);
                    node.refactor(); //get new calc with updated values (cascading)
                    this.orient(); //position all nodes correctly
                    calcDisplay.innerHTML = this.getInnerHTML(); // Update the display
                    this.saveSession(); //save session data
                }
            }
        });

        //select co menu
        const selectCOMenu = document.getElementById('calc-plus-select-co');
        selectCOMenu.addEventListener('click', (event) => {
            //let valueChanges = {'a_towers': false, 'a_cities': false, 'funds': false, 'power': false, 'co': false, 'd_towers': false, 'd_cities': false};
            //detect co
            const co = event.target.closest('.co_portrait').src.split('/ds')[1].split('.')[0];
            //detect node
            const node = this.currentNode;
            //detect attacker/defender and set node
            if (selectCOMenu.getAttribute('player-id') === 'attack') {
                node.attacker['co'] = CO_LIST[co];
                //valueChanges['co'] = true;
            } else {
                node.defender['co'] = CO_LIST[co];
            }
            this.closeMenu('select-co');
            this.currentNode.refactor();
            this.orient();
            calcDisplay.innerHTML = this.getInnerHTML(); // Update the display\
            this.saveSession(); //save session data
        });

        //select terrain
        const selectTerrainMenu = document.getElementById('calc-plus-select-terrain');
        selectTerrainMenu.addEventListener('click', (event) => {
            //let valueChanges = {'a_towers': false, 'a_cities': false, 'funds': false, 'power': false, 'co': false, 'd_towers': false, 'd_cities': false};
            //detect terrain
            let terrain = event.target.closest('.calc-plus-terrain-image').src.split('ani/')[1].split('.')[0].toLowerCase();

            //detect node
            const node = this.currentNode;
            //check for building
            if (terrain.includes(node.attacker['country']['name'].toLowerCase()) || terrain.includes(node.defender['country']['name'].toLowerCase())) {
                terrain = terrain.replace(node.attacker['country']['name'].toLowerCase(), '').replace(node.defender['country']['name'].toLowerCase(), '');
            }

            //detect attacker/defender and set node
            if (selectTerrainMenu.getAttribute('player-id') === 'attack') {
                node.attacker['terrain'] = TERRAIN_LIST[terrain];
            } else {
                node.defender['terrain'] = TERRAIN_LIST[terrain];
            }
            this.closeMenu('select-terrain');
            this.currentNode.refactor();
            this.orient();
            calcDisplay.innerHTML = this.getInnerHTML(); // Update the display
            this.saveSession(); //save session data
        });

        //select unit menu
        const selectUnitMenu = document.getElementById('calc-plus-select-unit');
        selectUnitMenu.addEventListener('click', (event) => {
            //let valueChanges = {'a_towers': false, 'a_cities': false, 'funds': false, 'power': false, 'co': false, 'd_towers': false, 'd_cities': false};
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
            this.currentNode.refactor();
            this.orient();
            calcDisplay.innerHTML = this.getInnerHTML(); // Update the display
            this.saveSession(); //save session data
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

    //Add session load
    DCP.loadSession();

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
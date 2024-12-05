namespace SpriteKind {
    export const Sprite = SpriteKind.create()
}
/**
 * To do
 * 
 * 1. Combat
 * 
 * 2. Monsters
 * 
 * 3. shop
 * 
 * 4. coins
 * 
 * 5. 
 * 
 * 6. 
 * 
 * 7. 
 * 
 * 8. 
 * 
 * 9. 
 * 
 * 10.
 */
/**
 * 1.  Shortsword
 * 
 * 2. Longsword
 * 
 * 3. Greatsword
 * 
 * 4. Flail
 * 
 * 5. Double Daggers
 * 
 * 6. Axe
 * 
 * 7. Mace
 * 
 * 8. Spear
 * 
 * 9. Staff
 * 
 * 10. Double Shortsword
 */
/**
 * 1. Area Blast
 * 
 * 2. Shield
 * 
 * 3. Fireball
 * 
 * 4. Heal
 * 
 * 5. Invisibility
 * 
 * 6. Water Walk
 * 
 * 7. Lightning
 * 
 * 8. Wall
 * 
 * 9. Phase (Ingore Walls)
 * 
 * 10. Mage Armor
 */
/**
 * 1. Knight
 * 
 * 2. Rouge
 * 
 * 3. Sorcerer
 * 
 * 4. Barbarian
 * 
 * 5. Ranger
 * 
 * 6. Adventurer
 * 
 * 7. Dragon
 * 
 * 8. 
 * 
 * 9. 
 * 
 * 10.
 */
/**
 * 1. Knight
 * 
 * 2. Rouge
 * 
 * 3. Sorcerer
 * 
 * 4. Barbarian
 * 
 * 5. Ranger
 * 
 * 6. Adventurer
 * 
 * 7. Dragon
 * 
 * 8. 
 * 
 * 9. 
 * 
 * 10.
 */
/**
 * 1. Knight
 * 
 * 2. Rouge
 * 
 * 3. Sorcerer
 * 
 * 4. Barbarian
 * 
 * 5. Ranger
 * 
 * 6. Adventurer
 * 
 * 7. Dragon
 * 
 * 8. 
 * 
 * 9. 
 * 
 * 10.
 */
/**
 * 1. Knight
 * 
 * 2. Rouge
 * 
 * 3. Sorcerer
 * 
 * 4. Barbarian
 * 
 * 5. Ranger
 * 
 * 6. Adventurer
 * 
 * 7. Dragon
 * 
 * 8. 
 * 
 * 9. 
 * 
 * 10.
 */
function Close_Invintory () {
    tiles.setCurrentTilemap(tilemap`level6`)
    In_Invintory = false
    Pause = false
    Pause_Game()
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 9 9 . . . . . . . 
        . . . . 9 9 9 9 9 9 9 9 . . . . 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        9 9 9 9 9 f 9 f 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        . . . 9 9 9 9 9 9 9 9 9 9 . . . 
        `)
    scene.cameraFollowSprite(mySprite)
}
function Attack () {
    timer.throttle("Attack", 500, function () {
        if (Direction == "Left") {
            Sword_Sprite = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . d d . . . . . . . . . 
                . . . . d b c . . . . . . . . . 
                . . . d b c . . . . . . . . . . 
                . . . d b c . . . . . . . . . . 
                . . d b b c . . . . . . . . . . 
                . . d b b c . . . . . . . . . . 
                . . d b b c . . . . . . . . . . 
                . . d b b c . . . . . . . . . . 
                . . d b b c . . . . . . . . . . 
                . . . d b b c . . . . . . . . . 
                . . . d b b b c . . . . . . . . 
                . . . . d b b b c c c . . . . . 
                . . . . . d d b b b b c . . . . 
                . . . . . . . . d d d b . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 0, 0)
            Sword_Sprite.setPosition(mySprite.x - 15, mySprite.y)
            timer.after(200, function () {
                sprites.destroy(Sword_Sprite)
            })
        } else if (Direction == "Right") {
            Sword_Sprite = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . d d . . . . . . . . . 
                . . . . d b c . . . . . . . . . 
                . . . d b c . . . . . . . . . . 
                . . . d b c . . . . . . . . . . 
                . . d b b c . . . . . . . . . . 
                . . d b b c . . . . . . . . . . 
                . . d b b c . . . . . . . . . . 
                . . d b b c . . . . . . . . . . 
                . . d b b c . . . . . . . . . . 
                . . . d b b c . . . . . . . . . 
                . . . d b b b c . . . . . . . . 
                . . . . d b b b c c c . . . . . 
                . . . . . d d b b b b c . . . . 
                . . . . . . . . d d d b . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 0, 0)
            Sword_Sprite.setPosition(mySprite.x + 15, mySprite.y)
            timer.after(200, function () {
                sprites.destroy(Sword_Sprite)
            })
        } else if (Direction == "Up") {
            Sword_Sprite = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . d d . . . . . . . . . 
                . . . . d b c . . . . . . . . . 
                . . . d b c . . . . . . . . . . 
                . . . d b c . . . . . . . . . . 
                . . d b b c . . . . . . . . . . 
                . . d b b c . . . . . . . . . . 
                . . d b b c . . . . . . . . . . 
                . . d b b c . . . . . . . . . . 
                . . d b b c . . . . . . . . . . 
                . . . d b b c . . . . . . . . . 
                . . . d b b b c . . . . . . . . 
                . . . . d b b b c c c . . . . . 
                . . . . . d d b b b b c . . . . 
                . . . . . . . . d d d b . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 0, 0)
            Sword_Sprite.setPosition(mySprite.x, mySprite.y - 15)
            timer.after(200, function () {
                sprites.destroy(Sword_Sprite)
            })
        } else if (Direction == "Down") {
            Sword_Sprite = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . d d . . . . . . . . . 
                . . . . d b c . . . . . . . . . 
                . . . d b c . . . . . . . . . . 
                . . . d b c . . . . . . . . . . 
                . . d b b c . . . . . . . . . . 
                . . d b b c . . . . . . . . . . 
                . . d b b c . . . . . . . . . . 
                . . d b b c . . . . . . . . . . 
                . . d b b c . . . . . . . . . . 
                . . . d b b c . . . . . . . . . 
                . . . d b b b c . . . . . . . . 
                . . . . d b b b c c c . . . . . 
                . . . . . d d b b b b c . . . . 
                . . . . . . . . d d d b . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 0, 0)
            Sword_Sprite.setPosition(mySprite.x, mySprite.y + 15)
            timer.after(200, function () {
                sprites.destroy(Sword_Sprite)
            })
        }
    })
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.A.isPressed() && In_Invintory == false) {
        Open_Inventory()
    } else if (In_Invintory == true) {
        Close_Invintory()
    } else {
        Cast_Spell_1()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile34`, function (sprite, location) {
    if (controller.A.isPressed()) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Sprite)
        tiles.setCurrentTilemap(tilemap`level15`)
        Place_Items(_Chestplate_List)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile32`, function (sprite, location) {
    if (controller.A.isPressed()) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Sprite)
        tiles.setCurrentTilemap(tilemap`level15`)
        Place_Items(_Spell_List)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.B.isPressed() && In_Invintory == false) {
        Open_Inventory()
    } else {
        Attack()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile33`, function (sprite, location) {
    if (controller.A.isPressed()) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Sprite)
        tiles.setCurrentTilemap(tilemap`level12`)
        Place_Items(_Weapon_List)
    }
})
function Open_Inventory () {
    info.changeScoreBy(10)
    In_Invintory = true
    Pause = true
    Pause_Game()
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f . . . . . . . . . . 
        . f 1 1 1 f f f f . . . . . . . 
        . f 1 1 1 1 1 1 f f f . . . . . 
        . f 1 1 1 1 1 1 1 1 f . . . . . 
        . f f 1 1 1 1 1 1 1 f . . . . . 
        . . f 1 1 1 1 1 f f f . . . . . 
        . . f 1 1 1 1 1 1 f . . . . . . 
        . . f f 1 1 f 1 1 1 f . . . . . 
        . . . f 1 1 f f 1 1 1 f . . . . 
        . . . f f f f . f 1 1 1 f . . . 
        . . . . . . . . . f 1 1 1 f . . 
        . . . . . . . . . . f 1 1 f . . 
        . . . . . . . . . . . f f f . . 
        . . . . . . . . . . . . . . . . 
        `)
    tiles.setCurrentTilemap(tilemap`level10`)
    scene.centerCameraAt(9, 6)
    if (Level == 1) {
        tiles.setTileAt(tiles.getTileLocation(4, 6), assets.tile`myTile22`)
    } else if (Level == 2) {
        tiles.setTileAt(tiles.getTileLocation(4, 6), assets.tile`myTile23`)
    } else if (Level == 3) {
        tiles.setTileAt(tiles.getTileLocation(4, 6), assets.tile`myTile24`)
    } else if (Level == 4) {
        tiles.setTileAt(tiles.getTileLocation(4, 6), assets.tile`myTile25`)
    } else if (Level == 5) {
        tiles.setTileAt(tiles.getTileLocation(4, 6), assets.tile`myTile26`)
    } else if (Level == 6) {
        tiles.setTileAt(tiles.getTileLocation(4, 6), assets.tile`myTile27`)
    } else if (Level == 7) {
        tiles.setTileAt(tiles.getTileLocation(4, 6), assets.tile`myTile28`)
    } else if (Level == 8) {
        tiles.setTileAt(tiles.getTileLocation(4, 6), assets.tile`myTile29`)
    } else if (Level == 9) {
        tiles.setTileAt(tiles.getTileLocation(4, 6), assets.tile`myTile30`)
    } else if (Level == 10) {
        tiles.setTileAt(tiles.getTileLocation(4, 6), assets.tile`myTile31`)
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.chestOpen)
    Loot_Chest()
    timer.after(3000, function () {
        if (In_Invintory == false) {
            tiles.setTileAt(location, sprites.dungeon.chestClosed)
        }
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile37`, function (sprite, location) {
    if (controller.A.isPressed()) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Sprite)
        tiles.setCurrentTilemap(tilemap`level15`)
        Place_Items(_Boots_List)
    }
})
function Loot_Random () {
    info.changeScoreBy(randint(3, 12))
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile36`, function (sprite, location) {
    if (controller.A.isPressed()) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Sprite)
        tiles.setCurrentTilemap(tilemap`level15`)
        Place_Items(_Greaves_List)
    }
})
function Create_Item_list () {
    Weapons = [
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b c c b b b b f 
        f b b b b b b b b c c b b b b f 
        f b b b b b b b c c b b b b b f 
        f b b b b b b c c c b b b b b f 
        f b b e e b c c c b b b b b b f 
        f b b b e e c c b b b b b b b f 
        f b b b b e e b b b b b b b b f 
        f b b b e e e e b b b b b b b f 
        f b b e e b b e e b b b b b b f 
        f b b e b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b c c f 
        f b b b b b b b b b b b c c c f 
        f b b b b b b b b b b c c c b f 
        f b b b b b b b b b c c c b b f 
        f b b b b b b b b c c c b b b f 
        f b b b b b b b c c c b b b b f 
        f b b e b b b c c c b b b b b f 
        f b b e e b c c c b b b b b b f 
        f b b e e e c c b b b b b b b f 
        f b b b e e e b b b b b b b b f 
        f b b e e e e e b b b b b b b f 
        f b e e e b e e e b b b b b b f 
        f b e e b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b c c f 
        f b b b b b b b b b b b c c c f 
        f b b b b b b b b b b c c c b f 
        f b b b b b b b b b c c c b b f 
        f b b b b b b c c c c c b b b f 
        f b b b e b b b c c c b b b b f 
        f b b b e e b c c c c b b b b f 
        f b b b b e e c c b c b b b b f 
        f b b b b e e e b b b b b b b f 
        f b b b e e e e e b b b b b b f 
        f b b e e e b b e e b b b b b f 
        f b e e e b b b b b b b b b b f 
        f b e e b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b c c c c c b b b b f 
        f b b b b c c b b b c c b b b f 
        f b b b b c b b b b b c c b b f 
        f b b b c b b b b b b f f b b f 
        f b b b c c b b b b f f f f b f 
        f b b b b c b b b f f f f f f f 
        f b b b e e b b b f f f f f f f 
        f b b b e e b b b b f f f f b f 
        f b b b e e b b b b b f f b b f 
        f b b b e e b b b b b b b b b f 
        f b b b e e b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b f f b b b c c b b b f 
        f b b b b f f f b c c c b b b f 
        f b b b b b f f c c c b b b b f 
        f b b b b b b c c c b b b b b f 
        f b b b b b e c c f e b b b b f 
        f b b b b e e e b e e e b b b f 
        f b b b e e e b b b e e e b b f 
        f b b b e e b b b b b e e b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b c c c c c c b b b b f 
        f b b b b c c c c c c c b b b f 
        f b b b b c c b c c c c b b b f 
        f b b b b c c b b b c c b b b f 
        f b b b b c c b b b c b b b b f 
        f b b b b c c b b b b b b b b f 
        f b b b b c c b b b b b b b b f 
        f b b b b e e b b b b b b b b f 
        f b b b b e e b b b b b b b b f 
        f b b b b e e b b b b b b b b f 
        f b b b b e e b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b f f b b b b b b b f 
        f b b b b f f f f b b b b b b f 
        f b b b b f f f f b b b b b b f 
        f b b b b b f f b b b b b b b f 
        f b b b b b c c b b b b b b b f 
        f b b b b b c c b b b b b b b f 
        f b b b b b e e b b b b b b b f 
        f b b b b b c c b b b b b b b f 
        f b b b b b e e b b b b b b b f 
        f b b b b b c c b b b b b b b f 
        f b b b b b e e b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f c c b b b b b b b b b b b b f 
        f c c c b b b b b b b b b b b f 
        f b c c c c b b b b b b b b b f 
        f b b c e e b b b b b b b b b f 
        f b b c b e e b b b b b b b b f 
        f b b b b b e e b b b b b b b f 
        f b b b b b b e e b b b b b b f 
        f b b b b b b b e e b b b b b f 
        f b b b b b b b b e e b b b b f 
        f b b b b b b b b b e e b b b f 
        f b b b b b b b b b b e e b b f 
        f b b b b b b b b b b b e e b f 
        f b b b b b b b b b b b b e e f 
        f b b b b b b b b b b b b b e f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b e e f 
        f b b b b b b b b b b b e e e f 
        f b b b b b b b b b b e e e b f 
        f b b b b b b b b b e e e b b f 
        f b b b b b b b b e e e b b b f 
        f b b b b b b b d d e b b b b f 
        f b b b b b b d d d b b b b b f 
        f b b b b b d d d b b b b b b f 
        f b b b b e d d b b b b b b b f 
        f b b b e e e b b b b b b b b f 
        f b b e e e b b b b b b b b b f 
        f b e e e b b b b b b b b b b f 
        f e e e b b b b b b b b b b b f 
        f e e b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f f f b b b b b b b b b c c b f 
        f f f f b b b b b b b c c c b f 
        f b f f f b b b b b c c c b b f 
        f b b f f f b b b c c c b b b f 
        f b b b f f f b c c c b b b b f 
        f b b b b f f c c c b b b b b f 
        f b b b b b c c c b b b b b b f 
        f b b b b c c c f f b b b b b f 
        f b b b e e c b f e e b b b b f 
        f b b e e e b b b e e e b b b f 
        f b e e e b b b b b e e e b b f 
        f b e e b b b b b b b e e b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `
    ]
    Spells = [
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b 9 9 b b b 9 9 b b b b f 
        f b b b b 9 b b 9 9 b b b b b f 
        f b 9 b b 9 b b 9 b b b b b b f 
        f b 9 9 b 9 9 9 9 9 b b b b b f 
        f b b 9 9 b b b b 9 9 9 9 9 9 f 
        f b b 9 b b b b b 9 b b b b b f 
        f b b 9 9 b b b b 9 9 b b b b f 
        f b b 9 9 9 9 9 9 9 9 b b b b f 
        f 9 9 9 b b 9 b b b 9 9 b b b f 
        f b b b b 9 9 b b b b 9 b b b f 
        f b b b b 9 b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b 9 b b b b b b b b b b f 
        f b b b 9 9 b b b b 9 9 9 b b f 
        f b b b 9 9 9 9 9 9 9 9 b b b f 
        f b b b 9 9 9 9 9 9 9 9 b b b f 
        f b b b b 9 9 9 9 9 9 9 b b b f 
        f b b b b 9 9 9 9 9 9 b b b b f 
        f b b b b b 9 9 9 9 9 b b b b f 
        f b b b b b 9 9 9 9 b b b b b f 
        f b b b b b 9 9 9 b b b b b b f 
        f b b b b b b 9 b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b 2 2 2 2 2 b b b f 
        f b b b b b 2 2 2 2 2 2 2 b b f 
        f b b b 2 2 2 2 4 4 4 4 2 2 b f 
        f b 2 2 2 2 4 4 5 5 5 4 2 2 b f 
        f b 2 2 2 2 2 4 5 5 4 4 2 2 b f 
        f b b b b 2 2 2 2 4 4 2 2 b b f 
        f b b b b b b 2 2 2 2 2 2 b b f 
        f b b b b b b b 2 2 2 2 b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b 2 2 b b b 2 2 b b b b f 
        f b b 2 2 2 2 b 2 2 2 2 b b b f 
        f b 2 2 2 2 2 2 2 1 2 2 2 b b f 
        f b 2 2 2 2 2 2 2 2 1 2 2 b b f 
        f b 2 2 2 2 2 2 2 2 2 2 2 b b f 
        f b b 2 2 2 2 2 2 2 2 2 b b b f 
        f b b b 2 2 2 2 2 2 2 b b b b f 
        f b b b b 2 2 2 2 2 b b b b b f 
        f b b b b b 2 2 2 b b b b b b f 
        f b b b b b b 2 b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b 1 b b b b b b 1 b f 
        f b b b b b b 1 b b b b 1 b b f 
        f b b b b b b b b b b 1 b b b f 
        f b b b b b b 1 1 1 b b b b b f 
        f b 1 b 1 b 1 b b b 1 b b b b f 
        f b b b b b 1 b b b 1 b b b b f 
        f b b b b b 1 b b b 1 b b b b f 
        f b b b b b b 1 1 1 b b b b b f 
        f b b b 1 b b b b b b b b b b f 
        f b b b b b b b b b b 1 b b b f 
        f b 1 b b b b b b b b b 1 b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b f f f b b b b b b b b f 
        f b b b f f f b b b b b b b b f 
        f b b b b f b b b b b b b b b f 
        f b b b f f f b b b b b b b b f 
        f b b b b f b b b b b b b b b f 
        f b b b f b f b b b b b b b b f 
        f b b 9 9 9 9 9 9 9 9 9 9 b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b c b b f 
        f b c c c c c c c c c c c b b f 
        f b b c c c c c c c c b b b b f 
        f b b b b c c c c 9 b b b b b f 
        f b b b b b b 9 9 b 9 b b b b f 
        f b b b b b 9 9 b b 9 9 b b b f 
        f b b b b b 9 b b b b 9 b b b f 
        f b b b b 9 9 9 b b b 9 9 b b f 
        f b b b b 9 b 9 b b b b 9 b b f 
        f b b b 9 9 b 9 9 b b b 9 b b f 
        f b b 9 9 b b b 9 b b b 9 9 b f 
        f b b 9 b b b b 9 b b b b b b f 
        f b b b b b b b 9 9 b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b c c c c c c c c c c b b f 
        f b b c b b c b b b c b c b b f 
        f b b c c c c c c c c c c b b f 
        f b b c b b b b c b b b c b b f 
        f b b c b b b b c b b b c b b f 
        f b b c c c c c c c c c c b b f 
        f b b c b b c b b b c b c b b f 
        f b b c b b c b b b c b c b b f 
        f b b c c c c c c c c c c b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b c c c c c b b b b b f 
        f b b b b c c c c c b b b b b f 
        f b b b b c c c c c b b b b b f 
        f b b b b c c c c c b b b b b f 
        f b b b b c c c c c b b b b b f 
        f b b b b c 1 1 1 c b b b b b f 
        f b b b b c 1 1 1 c b b b b b f 
        f b b b b c c 1 c c b b b b b f 
        f b b b b c 1 1 1 c b b b b b f 
        f b b b b c c 1 c c b b b b b f 
        f b b b b c 1 c 1 c b b b b b f 
        f b b b b c c c c c b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b 9 9 9 b b 9 9 9 b b b b f 
        f b b 9 9 9 9 9 9 9 9 b b b b f 
        f b b 9 9 9 9 9 9 9 9 b b b b f 
        f b b b 9 9 9 9 9 9 b b b b b f 
        f b b b 9 9 9 9 9 9 b b b b b f 
        f b b b 9 9 9 9 9 9 b b b b b f 
        f b b b 9 9 9 9 9 9 b b b b b f 
        f b b b 9 9 9 9 9 9 b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `
    ]
    Helmets = [
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b c c c c c c c c b b b f 
        f b b c c c c c c c c c c b b f 
        f b c c c c c c c c c c c c b f 
        f b c c c c c c c c c c c c b f 
        f b c c c c c c c c c c c c b f 
        f b c c b b b b b b b b c c b f 
        f b c c b b b b b b b b c c b f 
        f b c c c c c b b c c c c c b f 
        f b c c c c c b b c c c c c b f 
        f b c c c c c b b c c c c c b f 
        f b c c c c c b b c c c c c b f 
        f b b c c c c b b c c c c b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b f f f b b b b b b f 
        f b b b b f f f f f b b b b b f 
        f b b b f f f f f f f f b b b f 
        f b b f f f f f f f f f f b b f 
        f b b f f f f f b b f f f f b f 
        f b b f f f f b b b f f f f b f 
        f b b f f f b b b b b f f f b f 
        f b b f f f b b b b b f f f b f 
        f b b f f f f b b b f f f f b f 
        f b b f f f f f b b f f f f b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b 5 5 9 5 5 5 5 9 5 5 b b f 
        f b 5 5 b b b b b b b b 5 5 b f 
        f b 9 5 b b b b b b 5 5 5 b b f 
        f b b 5 5 5 5 5 5 9 5 b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b f f b b b b b b b b f 
        f b b b b f f f f b b b b b b f 
        f b b b b f b b b f b b b b b f 
        f b b b b f f b b b f b b b b f 
        f b b b b b f b b f b b b b b f 
        f b b b b b f f f b b b b b b f 
        f b b b b b f b f f b b b b b f 
        f b b b b b f b b b f b b b b f 
        f b b b b b f b b b f b b b b f 
        f b b b b f f f f f b b b b b f 
        f b b b b f f f b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b 7 7 7 7 b b b b b b f 
        f b b b b 7 7 7 7 7 b b b b b f 
        f b b b 7 7 7 7 7 7 7 7 b b b f 
        f b b b 7 7 7 7 7 7 7 7 b b b f 
        f b b 7 7 7 7 7 7 7 7 7 7 b b f 
        f b b 7 7 7 7 b b 7 7 7 7 b b f 
        f b 7 7 7 7 b b b 7 7 7 7 7 b f 
        f b 7 7 7 7 b b b 7 7 7 7 7 b f 
        f b 7 7 7 7 b b b 7 7 7 7 7 b f 
        f b 7 7 7 7 7 b 7 7 7 7 7 7 b f 
        f b b b b b b b b b 7 7 7 b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b c c c c c b b b b f 
        f b b b b c c c c c c c b b b f 
        f b b b c c c c c c c c c b b f 
        f b b c c c c c c c b c c c b f 
        f b b c c c c b c c b b c c b f 
        f b c c c c b b c c b b c c b f 
        f b c c c c b b c c b b c c b f 
        f b c c c c b b c c b b c c b f 
        f b c c c c b c c c c b c c b f 
        f b c c c c b c c c c b c c b f 
        f b b c c c b b b b b b c c b f 
        f b b b b b b b b b b b c c b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f c c b b b b b b b b b b c c f 
        f c c b b b b b b b b b b c c f 
        f c c c f f f f f f f c c c c f 
        f c c f f f f f f f f f c c b f 
        f b c f f f f f f f f f c b b f 
        f b b f f b b b b b f f b b b f 
        f b b f f f f b f f f f b b b f 
        f b b f f f f b f f f f b b b f 
        f b b f f f f b f f f f b b b f 
        f b b f f f f b f f f f b b b f 
        f b b f f f f b f f f f b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b f f f f f f b b b b b f 
        f b b f f b b b f f b b b b b f 
        f b f b b b b b b f b b b b b f 
        f b f f f b b b f f b b b b b f 
        f b b b f f f f f b b b b b b f 
        f b b b f f b b f f b b b b b f 
        f b b f b b b b f f b b b b b f 
        f b b f b b b b f b b b b b b f 
        f b b b f f f f f b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b f f f f f f b b b b f 
        f b b b f f b b b f b b b b b f 
        f b b f f b b b b f f b b b b f 
        f b b b f b b b b f f b b b b f 
        f b b b f f f f f f b b b b b f 
        f b b b b b b b b f b b b b b f 
        f b b b b b b b b f b b b b b f 
        f b b b b b b b b f b b b b b f 
        f b b b b b b b b f b b b b b f 
        f b b b b b b b b f b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b f b b b b b b b b b b f 
        f b b b f b b b b f f f f b b f 
        f b b b f b b f f b b b f b b f 
        f b b b f b b f b b b b f b b f 
        f b b b f b b f b b b b f b b f 
        f b b b f b f b b b b f b b b f 
        f b b b f b b f b b f b b b b f 
        f b b b f b b f f f b b b b b f 
        f b b b f b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `
    ]
    Chestplates = [
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b c c c b b c c c b b f 
        f b b b b c c c c c c c c b b f 
        f b b b b c c c c c c c c b b f 
        f b b b b b c c c c c c b b b f 
        f b b b b b c c c c c c b b b f 
        f b b b b b c c c c c c b b b f 
        f b b b b b c c c c c c b b b f 
        f b b b b b c c c c c c b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b f f f b b f f f b b b f 
        f b b b f f f f f f f f b b b f 
        f b b b b f f f f f f b b b b f 
        f b b b b f f f f f f b b b b f 
        f b b b b f f f f f f b b b b f 
        f b b b b f f f f f f b b b b f 
        f b b b b f f f f f b b b b b f 
        f b b b b f b f f f b b b b b f 
        f b b b b b b b f b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b f f f f b b f f f f b b f 
        f b b f c c c c c c c c f b b f 
        f b b c c c c c c c c c c b b f 
        f b b c c c c 9 9 c c c c b b f 
        f b b b b c c 9 9 c c b b b b f 
        f b b b b c c c c c c b b b b f 
        f b b b b c c c c c c b b b b f 
        f b b b b c c c c c c b b b b f 
        f b b b b c c c c c c b b b b f 
        f b b b b c c c c c c b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b f f f f b b b b b b f 
        f b b b b f b b f f b b b b b f 
        f b b b b f b b b f b b b b b f 
        f b b b b f f f f f b b b b b f 
        f b b b b f b f f b b b b b b f 
        f b b b b f b b f f b b b b b f 
        f b b b b f b b f b b b b b b f 
        f b b b f f f f f b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b 5 b 5 7 b 7 5 b 5 b b f 
        f b b b 5 5 5 7 7 7 5 5 5 b b f 
        f b b b 7 5 7 5 7 5 7 5 7 b b f 
        f b b b 7 7 7 5 5 5 7 7 7 b b f 
        f b b b 5 7 5 7 5 7 5 7 5 b b f 
        f b b b 5 5 5 7 7 7 5 5 5 b b f 
        f b b b 7 5 7 5 7 5 7 5 7 b b f 
        f b b b 7 7 7 5 5 5 7 7 7 b b f 
        f b b b b 7 b 7 5 7 b 7 b b b f 
        f b b b b b b 7 7 7 b b b b b f 
        f b b b b b b b 7 b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b c c c c b b c c c b b b f 
        f b b c c c c c c c c c b b b f 
        f b b b c c c c c c c c b b b f 
        f b b b c c c c c c c b b b b f 
        f b b b b c c c c c b b b b b f 
        f b b b b c c c c c b b b b b f 
        f b b b b c c c c c b b b b b f 
        f b b b b c b c c c b b b b b f 
        f b b b b b b c b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b c b c f b f c b c b b f 
        f b b b c c c f f f c c c b b f 
        f b b b f c f c f c f c f b b f 
        f b b b f f f c c c f f f b b f 
        f b b b c f c f c f c f c b b f 
        f b b b c c c f f f c c c b b f 
        f b b b f c f c f c f c f b b f 
        f b b b f f f c c c f f f b b f 
        f b b b b f b f c f b f b b b f 
        f b b b b b b f f f b b b b b f 
        f b b b b b b b f b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b f f f f f f b b b b b f 
        f b b f f b b b f f b b b b b f 
        f b f b b b b b b f b b b b b f 
        f b f f f b b b f f b b b b b f 
        f b b b f f f f f b b b b b b f 
        f b b b f f b b f f b b b b b f 
        f b b f b b b b f f b b b b b f 
        f b b f b b b b f b b b b b b f 
        f b b b f f f f f b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b f f f f f f b b b b f 
        f b b b f f b b b f b b b b b f 
        f b b f f b b b b f f b b b b f 
        f b b b f b b b b f f b b b b f 
        f b b b f f f f f f b b b b b f 
        f b b b b b b b b f b b b b b f 
        f b b b b b b b b f b b b b b f 
        f b b b b b b b b f b b b b b f 
        f b b b b b b b b f b b b b b f 
        f b b b b b b b b f b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b f b b b b b b b b b b f 
        f b b b f b b b b f f f f b b f 
        f b b b f b b f f b b b f b b f 
        f b b b f b b f b b b b f b b f 
        f b b b f b b f b b b b f b b f 
        f b b b f b f b b b b f b b b f 
        f b b b f b b f b b f b b b b f 
        f b b b f b b f f f b b b b b f 
        f b b b f b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `
    ]
    Greaves = [
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b c b b c b c b b c b b f 
        f b b b c c c c b c c c c b b f 
        f b b b c c c c b c c c c b b f 
        f b b b c c c c b c c c c b b f 
        f b b b b c c b b b c c b b b f 
        f b b b b c c b b b c c b b b f 
        f b b b b c c b b b c c b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b f b b f b f b b f b b f 
        f b b b f f f f b f f f f b b f 
        f b b b f f f f b f f f b b b f 
        f b b b f f f b b f f f b b b f 
        f b b b b f f b b b f f b b b f 
        f b b b b f f b b b f f b b b f 
        f b b b b f f b b b f b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b 5 b b 5 b 5 b b 5 b b f 
        f b b b 5 5 5 5 b 5 5 5 5 b b f 
        f b b b 5 9 9 5 b 5 9 9 5 b b f 
        f b b b 5 5 5 5 b 5 5 5 5 b b f 
        f b b b b 5 5 b b b 5 5 b b b f 
        f b b b b 5 5 b b b 5 5 b b b f 
        f b b b b 5 5 b b b 5 5 b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b f f f f b b b b b f 
        f b b b b b f b b b f f f b b f 
        f b b b b b f b b b b f f b b f 
        f b b b b b f f f f f b b b b f 
        f b b b b b f b b f f f b b b f 
        f b b b b b f b b b b f b b b f 
        f b b b b b f b b b b f b b b f 
        f b b b b f f b b f f b b b b f 
        f b b b b b f f f b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b 7 b 7 b 7 b 7 b b b f 
        f b b b b 7 7 7 b 7 7 7 b b b f 
        f b b b b 5 7 5 b 5 7 5 b b b f 
        f b b b b 5 5 5 b 5 5 5 b b b f 
        f b b b b 7 5 7 b 7 5 7 b b b f 
        f b b b b 7 7 7 b 7 7 7 b b b f 
        f b b b b 5 7 5 b 5 7 5 b b b f 
        f b b b b 5 5 5 b 5 5 5 b b b f 
        f b b b b b 5 b b b 5 b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b e b b e b e b b e b b f 
        f b b b e e e e b e e e e b b f 
        f b b b e e e e b e e e e b b f 
        f b b b b e e b b b e e b b b f 
        f b b b b e e b b b e e b b b f 
        f b b b b e e b b b e e b b b f 
        f b b b b e e b b b e b b b b f 
        f b b b b e b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b f b b f b f b b f b b f 
        f b b b c f f c b c f f c b b f 
        f b b b f 2 2 f b f 2 2 f b b f 
        f b b b c f f c b c f f c b b f 
        f b b b b c c b b b c c b b b f 
        f b b b b f f b b b f f b b b f 
        f b b b b f f b b b f f b b b f 
        f b b b b f f b b b f f b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b f f f f f f b b b b b f 
        f b b f f b b b f f b b b b b f 
        f b f b b b b b b f b b b b b f 
        f b f f f b b b f f b b b b b f 
        f b b b f f f f f b b b b b b f 
        f b b b f f b b f f b b b b b f 
        f b b f b b b b f f b b b b b f 
        f b b f b b b b f b b b b b b f 
        f b b b f f f f f b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b f f f f f f b b b b f 
        f b b b f f b b b f b b b b b f 
        f b b f f b b b b f f b b b b f 
        f b b b f b b b b f f b b b b f 
        f b b b f f f f f f b b b b b f 
        f b b b b b b b b f b b b b b f 
        f b b b b b b b b f b b b b b f 
        f b b b b b b b b f b b b b b f 
        f b b b b b b b b f b b b b b f 
        f b b b b b b b b f b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b f b b b b b b b b b b f 
        f b b b f b b b b f f f f b b f 
        f b b b f b b f f b b b f b b f 
        f b b b f b b f b b b b f b b f 
        f b b b f b b f b b b b f b b f 
        f b b b f b f b b b b f b b b f 
        f b b b f b b f b b f b b b b f 
        f b b b f b b f f f b b b b b f 
        f b b b f b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `
    ]
    Boots = [
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b c c c b b c c b b b f 
        f b b b b c c c b b c c b b b f 
        f b b b b c c c b b c c b b b f 
        f b b b b c c c b b c c b b b f 
        f b b c c c c c c b c c c c b f 
        f b c c c c c c c b c c c c b f 
        f b b c c c c c b b c c c c b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b f f b b b f b b b f 
        f b b b b b f f b b b f f b b f 
        f b b b b b f f f b b f f b b f 
        f b b b b b f f f b b f f b b f 
        f b b f f f f f f b b f f b b f 
        f b f f f f f f f b b f f f f f 
        f b b b f f f b b b b f f f f f 
        f b b b b b b b b b b b f b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b 5 5 5 b b 5 5 5 b b b f 
        f b b b 5 7 5 b b 5 7 5 b b b f 
        f b b b 5 5 5 b b 5 5 5 b b b f 
        f b b b 5 7 5 b b 5 7 5 b b b f 
        f b b 5 5 5 5 b b 5 5 5 5 b b f 
        f b 5 2 5 7 5 b b 5 7 5 2 5 b f 
        f 5 5 5 5 5 5 b b 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 b b 5 5 5 5 5 5 f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b f b b f f b b b b b b f 
        f b b b b f f b b f f b b b b f 
        f b b b b f b b b b f f b b b f 
        f b b b b f f b b f f b b b b f 
        f b b b b f f f f f b b b b b f 
        f b b b b f f b b b f b b b b f 
        f b b b b f b b b b f b b b b f 
        f b b b f f f f f f f b b b b f 
        f b b b f f f b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b 7 b 7 b b 7 b 7 b b b f 
        f b b b 7 7 7 b b 7 7 7 b b b f 
        f b b b 5 7 5 b b 5 7 5 b b b f 
        f b b b 5 5 5 b b 5 5 5 b b b f 
        f b b b 7 5 7 b b 7 5 7 b b b f 
        f b b b 7 7 7 b b 7 7 7 b b b f 
        f b 7 7 5 7 5 b b 5 7 5 7 7 b f 
        f 7 7 5 5 5 5 b b 5 5 5 5 7 7 f 
        f b 7 7 5 5 b b b b 5 5 7 7 b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b e b e b e b e b b b b f 
        f b b b e e e b e e e b b b b f 
        f b b b e e e b e e e b b b b f 
        f b b b e e e b e e e b b b b f 
        f b b b e e e b e e e b b b b f 
        f b e e e e e b e e e e e e b f 
        f e e e e e e b e e e e e e e f 
        f b e e e e b b b e e e e e b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b f b f b f b f b b b b f 
        f b b b f f f b f f f b b b b f 
        f b b b c f c b c f c b b b b f 
        f b b b c c c b c c c b b b b f 
        f b b b f c f b f c f b b b b f 
        f b b b f f f b f f f b b b b f 
        f b f f c f c b c f c f f b b f 
        f f f c c c c b c c c c f f b f 
        f b f f c c b b b c c f f b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b f f f f f f b b b b b f 
        f b b f f b b b f f b b b b b f 
        f b f b b b b b b f b b b b b f 
        f b f f f b b b f f b b b b b f 
        f b b b f f f f f b b b b b b f 
        f b b b f f b b f f b b b b b f 
        f b b f b b b b f f b b b b b f 
        f b b f b b b b f b b b b b b f 
        f b b b f f f f f b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b f f f f f f b b b b f 
        f b b b f f b b b f b b b b b f 
        f b b f f b b b b f f b b b b f 
        f b b b f b b b b f f b b b b f 
        f b b b f f f f f f b b b b b f 
        f b b b b b b b b f b b b b b f 
        f b b b b b b b b f b b b b b f 
        f b b b b b b b b f b b b b b f 
        f b b b b b b b b f b b b b b f 
        f b b b b b b b b f b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b f b b b b b b b b b b f 
        f b b b f b b b b f f f f b b f 
        f b b b f b b f f b b b f b b f 
        f b b b f b b f b b b b f b b f 
        f b b b f b b f b b b b f b b f 
        f b b b f b f b b b b f b b b f 
        f b b b f b b f b b f b b b b f 
        f b b b f b b f f f b b b b b f 
        f b b b f b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `
    ]
    Helmets.reverse()
    Chestplates.reverse()
    Greaves.reverse()
    Boots.reverse()
    Weapons.reverse()
    Spells.reverse()
}
function Recieve_Item (Item_Tile_List: Image[], Item_List: Image[]) {
    if (Item_Tile_List[1 - 1].equals(img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `)) {
        Item_Tile_List[1 - 1] = Item_List.pop()
    } else if (Item_Tile_List[2 - 1].equals(img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `)) {
        Item_Tile_List[2 - 1] = Item_List.pop()
    } else if (Item_Tile_List[3 - 1].equals(img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `)) {
        Item_Tile_List[3 - 1] = Item_List.pop()
    } else if (Item_Tile_List[4 - 1].equals(img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `)) {
        Item_Tile_List[4 - 1] = Item_List.pop()
    } else if (Item_Tile_List[5 - 1].equals(img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `)) {
        Item_Tile_List[5 - 1] = Item_List.pop()
    } else if (Item_Tile_List[6 - 1].equals(img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `)) {
        Item_Tile_List[6 - 1] = Item_List.pop()
    } else if (Item_Tile_List[7 - 1].equals(img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `)) {
        Item_Tile_List[7 - 1] = Item_List.pop()
    } else if (Item_Tile_List[8 - 1].equals(img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `)) {
        Item_Tile_List[8 - 1] = Item_List.pop()
    } else if (Item_Tile_List[9 - 1].equals(img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `)) {
        Item_Tile_List[9 - 1] = Item_List.pop()
    } else if (Item_Tile_List[10 - 1].equals(img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `)) {
        Item_Tile_List[10 - 1] = Item_List.pop()
    }
}
function Loot_Chest () {
    Random_List_Number = randint(1, 6)
    if (Random_List_Number == 1) {
        Recieve_Item(_Helm_List, Helmets)
    } else if (Random_List_Number == 2) {
        Recieve_Item(_Chestplate_List, Chestplates)
    } else if (Random_List_Number == 3) {
        Recieve_Item(_Greaves_List, Greaves)
    } else if (Random_List_Number == 4) {
        Recieve_Item(_Boots_List, Boots)
    } else if (Random_List_Number == 5) {
        Recieve_Item(_Weapon_List, Weapons)
    } else if (Random_List_Number == 6) {
        Recieve_Item(_Spell_List, Spells)
    }
}
function Pause_Game () {
    if (Pause == true) {
        for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
            value.follow(mySprite, 0)
        }
    } else if (Pause == false) {
        for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
            value.follow(mySprite, 60)
        }
    }
}
function Place_Items (Item_List: Image[]) {
    tiles.setTileAt(tiles.getTileLocation(1, 1), Item_List[1 - 1])
    tiles.setTileAt(tiles.getTileLocation(2, 1), Item_List[2 - 1])
    tiles.setTileAt(tiles.getTileLocation(3, 1), Item_List[3 - 1])
    tiles.setTileAt(tiles.getTileLocation(4, 1), Item_List[4 - 1])
    tiles.setTileAt(tiles.getTileLocation(5, 1), Item_List[5 - 1])
    tiles.setTileAt(tiles.getTileLocation(1, 2), Item_List[6 - 1])
    tiles.setTileAt(tiles.getTileLocation(2, 2), Item_List[7 - 1])
    tiles.setTileAt(tiles.getTileLocation(3, 2), Item_List[8 - 1])
    tiles.setTileAt(tiles.getTileLocation(4, 2), Item_List[9 - 1])
    tiles.setTileAt(tiles.getTileLocation(5, 2), Item_List[0 - 1])
}
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass2, function (sprite, location) {
    timer.throttle("Spawn Enemy", 1000, function () {
        Test_Enemy = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 2 2 2 . . . . . 
            . . . . 2 2 2 2 2 2 2 2 2 2 . . 
            . . . 2 2 f 2 2 2 f 2 2 2 2 . . 
            . . 2 2 2 2 f 2 f 2 2 2 2 2 2 . 
            . 2 2 2 2 2 2 f 2 2 2 2 2 2 2 . 
            2 2 2 2 2 f 2 2 2 f 2 2 2 2 2 . 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            . 2 2 2 2 f f f f 2 2 2 2 2 2 . 
            . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(Test_Enemy, sprites.castle.tilePath5)
    })
    Test_Enemy.follow(mySprite, 60)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    Coin_Sprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Sprite)
    tiles.placeOnRandomTile(Coin_Sprite, assets.tile`myTile5`)
    Coin_Sprite.sayText(Coins, 2000, false)
})
function Create_Item_Tile_Lists () {
    _Weapon_List = [
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `
    ]
    _Spell_List = [
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `
    ]
    _Helm_List = [
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `
    ]
    _Chestplate_List = [
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `
    ]
    _Greaves_List = [
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `
    ]
    _Boots_List = [
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f b b b b b b b b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `
    ]
}
function Check_Direction () {
    if (controller.left.isPressed()) {
        Direction = "Left"
    } else if (controller.right.isPressed()) {
        Direction = "Right"
    } else if (controller.up.isPressed()) {
        Direction = "Up"
    } else if (controller.down.isPressed()) {
        Direction = "Down"
    }
}
function Cast_Spell_1 () {
    timer.throttle("Cast Spell_1", 500, function () {
        if (Direction == "Left") {
            Magic1 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 9 9 9 . . . . . . . 
                . . . . 9 9 9 6 6 9 8 . . . . . 
                . . . 9 9 f f f f f 6 6 . . . . 
                . . 9 9 6 6 6 f 6 6 6 6 8 . . . 
                . . 9 f 6 9 6 f 6 9 6 f 8 . . . 
                . 9 9 f 6 6 6 f 6 6 6 f 6 8 . . 
                . 9 6 f f f f f f f f f 6 8 . . 
                . 9 6 f 6 6 6 f 6 6 6 f 8 8 . . 
                . . 9 f 6 9 6 f 6 9 6 f 8 . . . 
                . . 8 6 6 6 6 f 6 6 6 8 8 . . . 
                . . . 8 6 f f f f f 8 8 . . . . 
                . . . . 8 8 6 6 8 8 8 . . . . . 
                . . . . . . 8 8 8 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, -150, 0)
            timer.after(2000, function () {
                sprites.destroy(Sword_Sprite)
            })
        } else if (Direction == "Right") {
            Magic1 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 9 9 9 . . . . . . . 
                . . . . 9 9 9 6 6 9 8 . . . . . 
                . . . 9 9 f f f f f 6 6 . . . . 
                . . 9 9 6 6 6 f 6 6 6 6 8 . . . 
                . . 9 f 6 9 6 f 6 9 6 f 8 . . . 
                . 9 9 f 6 6 6 f 6 6 6 f 6 8 . . 
                . 9 6 f f f f f f f f f 6 8 . . 
                . 9 6 f 6 6 6 f 6 6 6 f 8 8 . . 
                . . 9 f 6 9 6 f 6 9 6 f 8 . . . 
                . . 8 6 6 6 6 f 6 6 6 8 8 . . . 
                . . . 8 6 f f f f f 8 8 . . . . 
                . . . . 8 8 6 6 8 8 8 . . . . . 
                . . . . . . 8 8 8 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 150, 0)
            timer.after(2000, function () {
                sprites.destroy(Magic1)
            })
        } else if (Direction == "Up") {
            Magic1 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 9 9 9 . . . . . . . 
                . . . . 9 9 9 6 6 9 8 . . . . . 
                . . . 9 9 f f f f f 6 6 . . . . 
                . . 9 9 6 6 6 f 6 6 6 6 8 . . . 
                . . 9 f 6 9 6 f 6 9 6 f 8 . . . 
                . 9 9 f 6 6 6 f 6 6 6 f 6 8 . . 
                . 9 6 f f f f f f f f f 6 8 . . 
                . 9 6 f 6 6 6 f 6 6 6 f 8 8 . . 
                . . 9 f 6 9 6 f 6 9 6 f 8 . . . 
                . . 8 6 6 6 6 f 6 6 6 8 8 . . . 
                . . . 8 6 f f f f f 8 8 . . . . 
                . . . . 8 8 6 6 8 8 8 . . . . . 
                . . . . . . 8 8 8 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 0, -150)
            timer.after(2000, function () {
                sprites.destroy(Magic1)
            })
        } else if (Direction == "Down") {
            Magic1 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 9 9 9 . . . . . . . 
                . . . . 9 9 9 6 6 9 8 . . . . . 
                . . . 9 9 f f f f f 6 6 . . . . 
                . . 9 9 6 6 6 f 6 6 6 6 8 . . . 
                . . 9 f 6 9 6 f 6 9 6 f 8 . . . 
                . 9 9 f 6 6 6 f 6 6 6 f 6 8 . . 
                . 9 6 f f f f f f f f f 6 8 . . 
                . 9 6 f 6 6 6 f 6 6 6 f 8 8 . . 
                . . 9 f 6 9 6 f 6 9 6 f 8 . . . 
                . . 8 6 6 6 6 f 6 6 6 8 8 . . . 
                . . . 8 6 f f f f f 8 8 . . . . 
                . . . . 8 8 6 6 8 8 8 . . . . . 
                . . . . . . 8 8 8 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 0, 150)
            timer.after(2000, function () {
                sprites.destroy(Magic1)
            })
        }
    })
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite == Sword_Sprite) {
        sprites.destroy(sprite)
        sprites.destroy(otherSprite)
        Loot_Random()
    } else if (sprite == Magic1) {
        sprites.destroy(sprite)
        sprites.destroy(otherSprite)
        Loot_Random()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile35`, function (sprite, location) {
    if (controller.A.isPressed()) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Sprite)
        tiles.setCurrentTilemap(tilemap`level15`)
        Place_Items(_Helm_List)
    }
})
let Magic1: Sprite = null
let Coin_Sprite: Sprite = null
let Test_Enemy: Sprite = null
let _Helm_List: Image[] = []
let Random_List_Number = 0
let Boots: Image[] = []
let Greaves: Image[] = []
let Chestplates: Image[] = []
let Helmets: Image[] = []
let Spells: Image[] = []
let Weapons: Image[] = []
let _Greaves_List: Image[] = []
let _Boots_List: Image[] = []
let _Weapon_List: Image[] = []
let _Spell_List: Image[] = []
let _Chestplate_List: Image[] = []
let Sword_Sprite: Sprite = null
let Pause = false
let In_Invintory = false
let Coins = 0
let Level = 0
let Direction = ""
let mySprite: Sprite = null
Create_Item_Tile_Lists()
Create_Item_list()
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 9 9 . . . . . . . 
    . . . . 9 9 9 9 9 9 9 9 . . . . 
    . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    9 9 9 9 9 f 9 f 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . . . 9 9 9 9 9 9 9 9 9 9 . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level2`)
info.setLife(10)
Direction = "Right"
scene.cameraFollowSprite(mySprite)
Level = 1
Coins = 50
game.onUpdate(function () {
    Check_Direction()
})

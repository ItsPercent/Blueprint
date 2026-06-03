ServerEvents.recipes((event) => {
    event.recipes.createCompacting(
        "minecraft:gravel",
        [
            "supplementaries:flint_block",
            "supplementaries:flint_block",
            "supplementaries:flint_block",
            "supplementaries:flint_block",
            "supplementaries:flint_block",
            "supplementaries:flint_block",
            "supplementaries:flint_block",
            "supplementaries:flint_block",
            "supplementaries:flint_block"
        ]
    ).heated()

    event.recipes.createCompacting(
        "minecraft:cobbled_deepslate",
        [
            "minecraft:cobblestone",
            "minecraft:cobblestone",
            "minecraft:cobblestone",
            "minecraft:cobblestone"
        ]
    ).heated()

    event.recipes.createCompacting(
        "minecraft:brown_mushroom_block",
        [
            "minecraft:brown_mushroom",
            "minecraft:brown_mushroom",
            "minecraft:brown_mushroom",
            "minecraft:brown_mushroom"
        ]
    )

    event.recipes.createCompacting(
        "minecraft:red_mushroom_block",
        [
            "minecraft:red_mushroom",
            "minecraft:red_mushroom",
            "minecraft:red_mushroom",
            "minecraft:red_mushroom"
        ]
    )

    event.recipes.createCutting(
        "minecraft:mushroom_stem",
        "minecraft:brown_mushroom_block"
    )

    event.recipes.createCutting(
        "minecraft:mushroom_stem",
        "minecraft:red_mushroom_block"
    )

    event.recipes.createCutting(
        "minecraft:mushroom_stem",
        [
            "minecraft:pointed_dripstone",
            "minecraft:pointed_dripstone"
        ]
    )

    event.recipes.createMixing(
        "minecraft:rooted_dirt",
        [
            "minecraft:dirt",
            "minecraft:hanging_roots"
        ]
    )

    event.recipes.createHaunting(
        "minecraft:crying_obsidian",
        "minecraft:obsidian"
    )

    event.recipes.createHaunting(
        "minecraft:wither_rose",
        "minecraft:poppy"
    )

    event.recipes.createEmptying(
        ["minecraft:sponge", Fluid.of("water", 250)],
        "minecraft:wet_sponge"
    )

    event.recipes.createFilling(
        "minecraft:wet_sponge",
        [
            "minecraft:sponge",
            Fluid.of("water", 250),
        ],
    )

    event.remove({id: 'createaddition:mixing/netherrack'})

    event.replaceOutput(
        {output: "create:dough"},
        "create:dough",
        "farmersdelight:wheat_dough"
    )

    event.replaceInput(
        [{id: "create:crafting/appliances/slime_ball"}, {id: "createaddition/compacting/cake_base"}],
        "create:dough",
        "#c:foods/dough"
    )
})
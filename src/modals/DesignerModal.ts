import {ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder, EmbedBuilder} from 'discord.js';

async function showDesignerModal(interaction) {

    disable(interaction);
    return;

    const modal = new ModalBuilder()
        .setCustomId('designer_modal')
        .setTitle('Designer');

    const age = new TextInputBuilder()
        .setCustomId('age')
        .setMinLength(2)
        .setMaxLength(3)
        .setLabel("How old are you?")
        .setRequired(true)
        .setPlaceholder("13+")
        .setStyle(TextInputStyle.Short);

    const showcase = new TextInputBuilder()
        .setCustomId('showcase')
        .setLabel("Showcase")
        .setRequired(true)
        .setPlaceholder("Link to design you made")
        .setStyle(TextInputStyle.Short);

    const ingame = new TextInputBuilder()
        .setCustomId('ingame')
        .setLabel("Minecraft name")
        .setMaxLength(16)
        .setMinLength(3)
        .setRequired(false)
        .setStyle(TextInputStyle.Short);

    modal.addComponents(
        new ActionRowBuilder<TextInputBuilder>().addComponents(age),
        new ActionRowBuilder<TextInputBuilder>().addComponents(showcase),
        new ActionRowBuilder<TextInputBuilder>().addComponents(ingame)
    );

    await interaction.showModal(modal);
}
async function disable(interaction) {
    await interaction.reply({ embeds: [new EmbedBuilder()
            .setColor(0xFF1A00)
            .setTitle('Sorry!')
            .setDescription('Currently you cannot apply for this role!')
            .setTimestamp()
        ], ephemeral: true });
}

export { showDesignerModal }
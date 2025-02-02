import { openTicketStaff } from '../../../utils/ticket/TicketOpenStaff';
import { createID } from '../../../utils/Utils';
import {Channel, EmbedBuilder} from "discord.js";

async function onClickClaimTicket(interaction, client) {
    if (!interaction.isButton()) return;
    const user = await interaction.guild.members.fetch(interaction.user.id);

    if (interaction.customId === 'claim_ticket') {
        await interaction.update({ disabled: true });
        client.channels.fetch("1117847277449511053").then(channel => {
            const embed = new EmbedBuilder()
                .setColor(0x00C1FF)
                .setTitle("Claimed ticket #" + interaction.channel.name)
                .setDescription(`By ` + user.displayName)
                .setTimestamp()
            channel.send({ embeds: [embed]});
        });
        interaction.channel.permissionOverwrites.edit("1095773070414844076", { ViewChannel: false }); //team role
        interaction.channel.permissionOverwrites.edit(user.id, { ViewChannel: true });
        await interaction.reply({ embeds: [new EmbedBuilder()
                .setColor(0x7ACB0C)
                .setTitle('Success!')
                .setDescription(user.name + " claimed the ticket!")
                .setTimestamp()]});
        interaction.message.delete();
    }
}

export { onClickClaimTicket }

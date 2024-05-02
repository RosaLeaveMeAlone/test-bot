const { Markup, Scenes } = require("telegraf");
const { BaseScene } = Scenes;

module.exports = new BaseScene("location")
    .enter((ctx) =>
        ctx.reply(
            "Choose an option:",
            Markup.keyboard([
            Markup.button.locationRequest("Send my location"),
            Markup.button.text("Back"),
            ])
            .oneTime()
            .resize()
        )
    )
    .on("text", (ctx) => {
        const message = ctx.message.text;
        if (message.toLowerCase() === "back") {
        // Aquí puedes manejar la lógica para ir a la escena "main" u otra escena
        ctx.scene.enter("main"); // Por ejemplo, cambiar a la escena "main"
        } else {
        ctx.reply("Invalid option. Please use the provided buttons.");
        }
    })
    .on("location", (ctx) => {
        const { latitude, longitude } = ctx.message.location;
        return ctx.reply(`Your coordinates: ${latitude}, ${longitude}`);
    })
    .command("main", (ctx) => ctx.scene.enter("main"))
    .use((ctx) => ctx.scene.reenter());
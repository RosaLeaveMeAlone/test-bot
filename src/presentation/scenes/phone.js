const { Markup, Scenes } = require("telegraf");
const { BaseScene } = Scenes;

module.exports = new BaseScene("phone")
    .enter((ctx) =>
        ctx.reply(
            "Send contact\n\n/main - main scene",
            Markup.keyboard([
                Markup.button.contactRequest("Send my contact"),
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
    .on("contact", (ctx) => {
    const { phone_number } = ctx.message.contact;
    return ctx.reply(`Your number: ${phone_number}`);
    })
    .command("main", (ctx) => ctx.scene.enter("main"))
    .use((ctx) => ctx.scene.reenter());
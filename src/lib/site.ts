/** Telegram bot deep link that opens the conference registration flow directly. */
export const TELEGRAM_REGISTER_URL = "https://t.me/OtolorAcademyBot?start=c2hvd0NvdXJzZV8xNjU=";

/** Handle shown to users when the bot is referred to by name. */
export const TELEGRAM_BOT_HANDLE = "@OtolorAcademyBot";

/** Venue — EMU University, Toshkent. The localised street address lives in the i18n dictionary. */
export const VENUE_NAME = "EMU University";

/** Organisation card on Yandex Maps, used for the outbound link. */
export const VENUE_MAP_URL = "https://yandex.ru/maps/org/emu_university/241930904388/";

/*
 * Embed uses the `ol=biz&oid=` organisation parameters rather than the
 * /org/<slug>/<id>/ path form: the path form opens the organisation card but
 * leaves the map at its default world-level viewport, so the venue is not
 * actually visible. These parameters centre the map on the organisation and
 * honour the zoom level.
 */
export const VENUE_MAP_EMBED_URL = "https://yandex.ru/map-widget/v1/?ol=biz&oid=241930904388&z=16";

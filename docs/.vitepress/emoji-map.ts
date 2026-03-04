// im so tired writing all of this shit :sob: - noxygalaxy

export const emojiToFaMap: [string, string][] = [
    ['👁️‍🗨️', 'fa-solid fa-eye'],
    ['🐻‍❄️', 'fa-solid fa-paw'],
    ['🧑‍💻', 'fa-solid fa-code'],
    ['🧘‍♂️', 'fa-solid fa-heart-pulse'],
    ['⛓️‍💥', 'fa-solid fa-link-slash'],

    ['🪦', 'fa-solid fa-box-archive'],
    ['💰', 'fa-solid fa-dollar-sign'],
    ['⚠️', 'fa-solid fa-triangle-exclamation'],
    ['⛔', 'fa-solid fa-ban'],

    ['🏠', 'fa-solid fa-house'],
    ['📱', 'fa-solid fa-mobile-screen-button'],
    ['🆕', 'fa-solid fa-certificate'],
    ['🔽', 'fa-solid fa-ellipsis'],
    ['💡', 'fa-solid fa-lightbulb'],

    ['🌐', 'fa-solid fa-globe'],
    ['👥', 'fa-solid fa-users'],
    ['🧠', 'fa-solid fa-brain'],
    ['🕊️', 'fa-solid fa-dove'],
    ['🐘', 'fa-brands fa-mastodon'],
    ['🎮', 'fa-solid fa-gamepad'],
    ['📸', 'fa-solid fa-camera-retro'],
    ['✈️', 'fa-solid fa-paper-plane'],
    ['🐭', 'fa-solid fa-comment-dots'],
    ['🎨', 'fa-solid fa-palette'],
    ['🟣', 'fa-solid fa-circle'],
    ['🔐', 'fa-solid fa-lock'],
    ['🗣️', 'fa-solid fa-comments'],
    ['🎥', 'fa-solid fa-video'],
    ['🦋', 'fa-solid fa-cloud'],
    ['🦤', 'fa-solid fa-hashtag'],
    ['🔧', 'fa-solid fa-wrench'],
    ['📞', 'fa-solid fa-phone'],
    ['📧', 'fa-solid fa-envelope'],
    ['🈸', 'fa-solid fa-language'],
    ['🖌️', 'fa-solid fa-paintbrush'],
    ['⌨️', 'fa-solid fa-keyboard'],
    ['🎴', 'fa-solid fa-icons'],
    ['👋', 'fa-solid fa-hand'],
    ['🎬', 'fa-solid fa-clapperboard'],
    ['🎵', 'fa-solid fa-music'],
    ['▶️', 'fa-solid fa-play'],
    ['📺', 'fa-solid fa-tv'],
    ['💌', 'fa-solid fa-envelope-open-text'],
    ['🎶', 'fa-solid fa-music'],
    ['🟢', 'fa-brands fa-spotify'],
    ['🐡', 'fa-solid fa-fish'],
    ['📑', 'fa-solid fa-file-lines'],
    ['🎙️', 'fa-solid fa-microphone'],
    ['📖', 'fa-solid fa-book-open'],
    ['🖥️', 'fa-solid fa-desktop'],
    ['🎛️', 'fa-solid fa-sliders'],
    ['🖼️', 'fa-solid fa-images'],
    ['📷', 'fa-solid fa-camera'],
    ['📝', 'fa-solid fa-pen-to-square'],
    ['🗓️', 'fa-solid fa-calendar-days'],
    ['⏱️', 'fa-solid fa-stopwatch'],
    ['🔢', 'fa-solid fa-hashtag'],
    ['🧮', 'fa-solid fa-calculator'],
    ['🎓', 'fa-solid fa-graduation-cap'],
    ['🧰', 'fa-solid fa-toolbox'],
    ['📁', 'fa-solid fa-folder-open'],
    ['🛍️', 'fa-solid fa-bag-shopping'],
    ['📦', 'fa-solid fa-box'],
    ['💬', 'fa-solid fa-comment'],
    ['📋', 'fa-solid fa-clipboard'],
    ['📜', 'fa-solid fa-scroll'],
    ['💾', 'fa-solid fa-floppy-disk'],
    ['🧹', 'fa-solid fa-broom'],
    ['🪛', 'fa-solid fa-screwdriver-wrench'],
    ['📲', 'fa-solid fa-mobile-screen'],
    ['#️⃣', 'fa-solid fa-terminal'],
    ['🔬', 'fa-solid fa-microscope'],
    ['🔦', 'fa-solid fa-bolt'],
    ['🌎', 'fa-solid fa-earth-americas'],
    ['⬇️', 'fa-solid fa-download'],
    ['🗺️', 'fa-solid fa-map-location-dot'],
    ['🛰️', 'fa-solid fa-satellite-dish'],
    ['💻', 'fa-solid fa-laptop-code'],
    ['📄', 'fa-solid fa-file'],
    ['🧩', 'fa-solid fa-puzzle-piece'],
    ['🕹️', 'fa-solid fa-gamepad'],
    ['🤖', 'fa-solid fa-robot'],
    ['🍏', 'fa-solid fa-apple-whole'],
    ['🛒', 'fa-solid fa-cart-shopping'],
    ['💸', 'fa-solid fa-money-bill-wave'],
    ['🌦️', 'fa-solid fa-cloud-sun-rain'],
    ['🪪', 'fa-solid fa-id-card'],
    ['🔑', 'fa-solid fa-key'],
    ['🧱', 'fa-solid fa-shield-halved'],
    ['🗳️', 'fa-solid fa-file-shield'],
    ['📟', 'fa-solid fa-floppy-disk'],
    ['🌍', 'fa-solid fa-earth-americas'],
    ['✨', 'fa-solid fa-star'],

    ['✈', 'fa-solid fa-paper-plane'],
    ['⌨', 'fa-solid fa-keyboard'],
    ['⚠', 'fa-solid fa-triangle-exclamation'],
]

export function buildEmojiRegex(): RegExp {
    const escaped = emojiToFaMap.map(([emoji]) =>
        emoji.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    )
    return new RegExp(escaped.join('|'), 'g')
}

export function replaceEmojisInString(text: string): string {
    let result = text
    for (const [emoji, faClass] of emojiToFaMap) {
        result = result.replaceAll(emoji, `<i class="${faClass} myal-fa-emoji"></i>`)
    }
    return result
}

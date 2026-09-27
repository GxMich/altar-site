// --- CONFIGURAZIONE ---
const CONFIG = {
    SCRIPT_URL: "https://script.google.com/macros/s/AKfycbzOsHlV6ymHOa6YMii_Lvh8o_HiyuEibX6478VjvJ3kDc_yXCgNyE8FhMbpMA6q1bIZ5g/exec",
    MY_WALLET: "0x63F75cbDF27A0e4f6F2453bd075F3c10cAe729A4",
    MAX_CAP: 84000,
    SITE_URL: "https://altarprotocol.vercel.app/"
};

// --- TRADUZIONI ---
const TRANSLATIONS = {
    it: {
        page_title: "Altar — chi paga di più regna",
        page_title_king: "♛ {king} regna su Altar",
        throne_lead: "Il trono appartiene a",
        throne_empty: "Nessuno",
        decree_empty: "Il trono è vuoto. Il primo a pagare regna.",
        reign_for: "Regna da {time}",
        reign_paid: "ha pagato {price}",
        claim_title: "Prendi il suo posto",
        claim_title_empty: "Siediti per primo",
        claim_how: "Paga più dell'ultimo re: il tuo nome e il tuo decreto sostituiscono i suoi, qui, davanti a tutti. Finché qualcuno non paga più di te.",
        label_alias: "Il tuo nome sul trono",
        label_email: "Email (privata, solo per contattarti)",
        label_decree: "Il tuo decreto",
        btn_offer: "Prendi il trono per",
        btn_closed: "Il trono è sigillato",
        share_lead: "Sfida qualcuno a detronizzarlo",
        share_lead_empty: "Sfida qualcuno a sedersi per primo",
        btn_copy_link: "Copia link",
        raised_of: "raccolti su 84.000 €",
        tributes: "{n} tributi pagati",
        graveyard_title: "Re caduti",
        history_empty: "Ancora nessun re caduto. Il primo detronizzato finirà qui.",
        pay_title: "Paga il tributo",
        step_send: "Invia almeno questo importo in ETH, POL, USDC, USDT o DAI a questo indirizzo, da Ethereum, Base, Arbitrum, Optimism o Polygon.",
        step_hash: "Incolla l'hash della transazione (0x…) quando è confermata",
        btn_copy: "Copia indirizzo",
        btn_confirm: "Verifica pagamento",
        status_verify: "Verifico la transazione sulla blockchain…",
        status_bad_hash: "L'hash deve iniziare con 0x ed essere lungo 66 caratteri.",
        status_network: "Il server non risponde. Controlla la connessione e riprova.",
        success_title: "Il trono è tuo.",
        success_text: "Ora fallo sapere: più gente ti vede, più dura la sfida.",
        err_fields: "Scrivi nome, email e decreto per continuare.",
        err_email: "Questa email non sembra valida.",
        err_load: "Non riesco a leggere lo stato del trono. Riprovo tra poco.",
        copied: "Copiato",
        sound_on: "Suono on",
        sound_off: "Suono off",
        link_rules: "Regole",
        link_privacy: "Privacy",
        link_terms: "Termini",
        share_king: "{king} regna su Altar dopo aver pagato {price}. Chi ha il coraggio di detronizzarlo? ♛",
        share_empty: "Il trono di Altar è vuoto. Il primo che paga regna. ♛",
        share_me: "Ho appena preso il trono di Altar per {price}. Detronizzami, se ci riesci. ♛"
    },
    en: {
        page_title: "Altar — the highest payer rules",
        page_title_king: "♛ {king} rules Altar",
        throne_lead: "The throne belongs to",
        throne_empty: "No one",
        decree_empty: "The throne is empty. The first to pay rules.",
        reign_for: "Reigning for {time}",
        reign_paid: "paid {price}",
        claim_title: "Take their place",
        claim_title_empty: "Sit here first",
        claim_how: "Pay more than the last ruler: your name and decree replace theirs, right here, for everyone to see. Until someone pays more than you.",
        label_alias: "Your name on the throne",
        label_email: "Email (private, only to reach you)",
        label_decree: "Your decree",
        btn_offer: "Take the throne for",
        btn_closed: "The throne is sealed",
        share_lead: "Dare someone to dethrone them",
        share_lead_empty: "Dare someone to sit here first",
        btn_copy_link: "Copy link",
        raised_of: "raised of €84,000",
        tributes: "{n} tributes paid",
        graveyard_title: "Fallen rulers",
        history_empty: "No fallen rulers yet. The first one dethroned lands here.",
        pay_title: "Pay the tribute",
        step_send: "Send at least this amount in ETH, POL, USDC, USDT or DAI to this address, from Ethereum, Base, Arbitrum, Optimism or Polygon.",
        step_hash: "Paste the transaction hash (0x…) once it's confirmed",
        btn_copy: "Copy address",
        btn_confirm: "Verify payment",
        status_verify: "Checking the transaction on-chain…",
        status_bad_hash: "The hash must start with 0x and be 66 characters long.",
        status_network: "The server isn't responding. Check your connection and try again.",
        success_title: "The throne is yours.",
        success_text: "Now tell people: the more who see you, the longer the fight.",
        err_fields: "Add a name, email and decree to continue.",
        err_email: "That email doesn't look valid.",
        err_load: "Can't read the throne right now. Retrying shortly.",
        copied: "Copied",
        sound_on: "Sound on",
        sound_off: "Sound off",
        link_rules: "Rules",
        link_privacy: "Privacy",
        link_terms: "Terms",
        share_king: "{king} rules Altar after paying {price}. Who dares to dethrone them? ♛",
        share_empty: "The Altar throne is empty. The first to pay rules. ♛",
        share_me: "I just took the Altar throne for {price}. Dethrone me if you can. ♛"
    }
};

// --- TESTI LEGALI ---
const LEGAL_TEXTS = {
    it: {
        rules: { title: "Regole", html: `<h3>Come funziona</h3><p>Altar non è un investimento. C'è un solo trono: chi paga più dell'ultimo re lo conquista, e il suo nome e il suo decreto restano in cima alla pagina finché qualcuno non paga di più.</p><h3>Il prezzo</h3><p>Il prezzo per il trono sale a ogni nuovo re. Il bottone mostra sempre l'importo minimo attuale.</p><h3>I re caduti</h3><p>Chi viene detronizzato resta nell'elenco dei re caduti, in ordine di tributo.</p><h3>Fine</h3><p>Quando il totale raccolto arriva a 84.000 € il trono viene sigillato per sempre.</p>` },
        privacy: { title: "Privacy", html: `<h3>Cosa è pubblico</h3><p>Solo il tuo nome sul trono e il tuo decreto.</p><h3>Cosa resta privato</h3><p>L'email serve solo per contattarti in caso di problemi con il pagamento. Non viene mostrata né usata per marketing.</p><h3>Nel browser</h3><p>Salviamo solo la lingua scelta e la preferenza del suono. Nessun tracker.</p>` },
        terms: { title: "Termini", html: `<h3>Accettazione</h3><p>Inviando fondi all'indirizzo di Altar accetti che il pagamento è una donazione non rimborsabile, qualunque sia la durata del tuo regno.</p><h3>Contenuti</h3><p>Nomi e decreti offensivi, illegali o che contengono dati personali di terzi possono essere rimossi.</p>` }
    },
    en: {
        rules: { title: "Rules", html: `<h3>How it works</h3><p>Altar is not an investment. There is one throne: whoever pays more than the last ruler takes it, and their name and decree stay at the top of the page until someone pays more.</p><h3>The price</h3><p>The price rises with every new ruler. The button always shows the current minimum.</p><h3>Fallen rulers</h3><p>Dethroned rulers stay in the fallen list, ordered by tribute.</p><h3>The end</h3><p>When the total reaches €84,000 the throne is sealed forever.</p>` },
        privacy: { title: "Privacy", html: `<h3>What's public</h3><p>Only your name on the throne and your decree.</p><h3>What stays private</h3><p>Your email is only used to reach you if something goes wrong with your payment. It's never shown or used for marketing.</p><h3>In your browser</h3><p>We store only your language and sound preference. No trackers.</p>` },
        terms: { title: "Terms", html: `<h3>Acceptance</h3><p>By sending funds to the Altar address you accept the payment is a non-refundable donation, however long your reign lasts.</p><h3>Content</h3><p>Offensive or illegal names and decrees, or ones containing other people's personal data, may be removed.</p>` }
    }
};

let state = {
    lang: 'it',
    data: null,
    currentPrice: null,
    isSoldOut: false,
    ethEur: null,
    lastPaidEur: null
};

const $ = id => document.getElementById(id);
const t = (key, vars = {}) => (TRANSLATIONS[state.lang][key] || key).replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '');

function safeGet(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }
function safeSet(key, val) { try { localStorage.setItem(key, val); } catch (e) {} }

function formatEur(n) {
    return new Intl.NumberFormat(state.lang === 'it' ? 'it-IT' : 'en-IE', {
        style: 'currency', currency: 'EUR', minimumFractionDigits: n % 1 ? 2 : 0, maximumFractionDigits: 2
    }).format(n);
}

document.addEventListener("DOMContentLoaded", () => {
    const saved = safeGet('altar_lang');
    if (saved === 'it' || saved === 'en') state.lang = saved;
    else if (!navigator.language.toLowerCase().startsWith('it')) state.lang = 'en';

    bindEvents();
    applyLanguage();
    fetchData();
    fetchEthPrice();
    setInterval(fetchData, 30000);
    setInterval(renderReign, 60000);
});

function bindEvents() {
    $('lang-btn').addEventListener('click', () => {
        state.lang = state.lang === 'it' ? 'en' : 'it';
        safeSet('altar_lang', state.lang);
        applyLanguage();
        render();
    });
    $('sound-btn').addEventListener('click', toggleSound);
    $('altar-audio').addEventListener('play', updateSoundLabel);
    $('altar-audio').addEventListener('pause', updateSoundLabel);
    $('claim-form').addEventListener('submit', e => { e.preventDefault(); handleAscension(); });
    $('user-decree').addEventListener('input', e => { $('char-count').textContent = e.target.value.length + "/60"; });
    $('btn-confirm-payment').addEventListener('click', submitPayment);
    $('copy-address').addEventListener('click', () => copyText(CONFIG.MY_WALLET));
    document.querySelectorAll('[data-share]').forEach(b => b.addEventListener('click', () => share(b.dataset.share)));
    document.querySelectorAll('[data-legal]').forEach(b => b.addEventListener('click', () => openLegal(b.dataset.legal)));
    document.querySelectorAll('dialog [data-close]').forEach(b => b.addEventListener('click', () => b.closest('dialog').close()));
    document.querySelectorAll('dialog').forEach(d => d.addEventListener('click', e => { if (e.target === d) d.close(); }));
}

function applyLanguage() {
    document.documentElement.lang = state.lang;
    $('lang-btn').textContent = state.lang === 'it' ? 'EN' : 'IT';
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (TRANSLATIONS[state.lang][key]) el.textContent = t(key);
    });
    updateSoundLabel();
}

// --- DATI ---
function fetchData() {
    fetch(`${CONFIG.SCRIPT_URL}?t=${Date.now()}`)
        .then(res => res.json())
        .then(data => {
            if (data.result === 'error') throw new Error(data.error);
            state.data = data;
            const raised = parseFloat(data.total_raised) || 0;
            state.currentPrice = parseFloat(data.current_price) || 0;
            state.isSoldOut = data.is_sold_out === true || data.is_sold_out === "true" || raised >= CONFIG.MAX_CAP;
            render();
        })
        .catch(() => {
            if (!state.data) $('king-decree').textContent = t('err_load');
        });
}

function fetchEthPrice() {
    fetch('https://api.coinbase.com/v2/prices/ETH-EUR/spot')
        .then(r => r.json())
        .then(d => { state.ethEur = parseFloat(d.data.amount) || null; })
        .catch(() => {});
}

function hasKing() {
    const k = state.data && state.data.current_king;
    return !!(k && k !== "NESSUNO");
}

function render() {
    const data = state.data;
    if (!data) return;
    const raised = parseFloat(data.total_raised) || 0;
    const king = hasKing();

    $('king-name').textContent = king ? data.current_king : t('throne_empty');
    $('king-name').classList.toggle('is-empty', !king);
    $('king-decree').textContent = king && data.current_decree ? data.current_decree.replace(/"/g, '') : t('decree_empty');
    $('king-price-line').textContent = king ? t('reign_paid', { price: formatEur(parseFloat(data.current_king_price) || 0) }) : '';
    renderReign();

    $('claim-title').textContent = t(king ? 'claim_title' : 'claim_title_empty');
    $('share-lead').textContent = t(king ? 'share_lead' : 'share_lead_empty');
    document.title = king ? t('page_title_king', { king: data.current_king }) : t('page_title');

    const pct = Math.min((raised / CONFIG.MAX_CAP) * 100, 100);
    $('total-raised-display').textContent = formatEur(raised);
    $('progress-bar').style.width = pct + "%";
    $('progress-track').setAttribute('aria-valuenow', pct.toFixed(1));
    const n = parseInt(data.tribute_count, 10);
    $('tribute-count').textContent = n > 0 ? t('tributes', { n }) : '';

    // Re caduti: costruiti con textContent (mai innerHTML con dati degli utenti)
    const list = $('graveyard-list');
    list.replaceChildren();
    if (data.history && data.history.length > 0) {
        data.history.forEach(item => {
            const li = document.createElement('li');
            const name = document.createElement('span');
            name.className = 'f-name';
            name.textContent = item.alias;
            const price = document.createElement('span');
            price.className = 'f-price';
            price.textContent = formatEur(parseFloat(item.importo) || 0);
            li.append(name, price);
            list.append(li);
        });
    } else {
        const li = document.createElement('li');
        li.className = 'f-empty';
        li.textContent = t('history_empty');
        list.append(li);
    }

    updateButtonState();
}

function renderReign() {
    const since = state.data && state.data.current_king_since;
    if (!hasKing() || !since) { $('reign-time').textContent = ''; return; }
    const mins = Math.max(0, Math.floor((Date.now() - new Date(since).getTime()) / 60000));
    const d = Math.floor(mins / 1440), h = Math.floor((mins % 1440) / 60), m = mins % 60;
    const time = d > 0 ? `${d}g ${h}h` : h > 0 ? `${h}h ${m}m` : `${m}m`;
    $('reign-time').textContent = t('reign_for', { time: state.lang === 'en' ? time.replace('g', 'd') : time });
}

function updateButtonState() {
    const btn = $('btn-ascend');
    if (state.isSoldOut) {
        $('btn-ascend-text').textContent = t('btn_closed');
        $('next-price-display').hidden = true;
        btn.disabled = true;
    } else {
        $('btn-ascend-text').textContent = t('btn_offer');
        $('next-price-display').hidden = false;
        $('next-price-display').textContent = state.currentPrice == null ? '…' : formatEur(state.currentPrice);
        btn.disabled = state.currentPrice == null;
    }
}

// --- PAGAMENTO ---
function handleAscension() {
    if (state.isSoldOut || state.currentPrice == null) return;
    const alias = $('user-alias').value.trim();
    const decree = $('user-decree').value.trim();
    const email = $('user-email').value.trim();
    const err = $('form-error');

    if (!alias || !decree || !email) { err.textContent = t('err_fields'); return; }
    if (!$('user-email').checkValidity()) { err.textContent = t('err_email'); return; }
    err.textContent = '';

    $('modal-price-display').textContent = formatEur(state.currentPrice);
    $('modal-eth-display').textContent = state.ethEur
        ? `≈ ${(state.currentPrice / state.ethEur * 1.01).toFixed(5)} ETH`
        : '';
    $('wallet-address').textContent = CONFIG.MY_WALLET;
    $('qr-image').src = `https://api.qrserver.com/v1/create-qr-code/?size=264x264&margin=0&data=${CONFIG.MY_WALLET}`;
    $('pay-steps').hidden = false;
    $('pay-success').hidden = true;
    $('payment-status').textContent = '';
    $('pay-dialog').showModal();
}

function submitPayment() {
    const txHash = $('tx-hash').value.trim();
    const status = $('payment-status');
    const btn = $('btn-confirm-payment');

    if (!/^0x[a-fA-F0-9]{64}$/.test(txHash)) { status.textContent = t('status_bad_hash'); return; }

    btn.disabled = true;
    status.textContent = t('status_verify');

    // x-www-form-urlencoded: Apps Script lo legge sempre in e.parameter, e non genera preflight CORS
    const body = new URLSearchParams({
        alias: $('user-alias').value.trim(),
        decreto: $('user-decree').value.trim(),
        email: $('user-email').value.trim(),
        crypto_type: 'AUTO',
        tx_hash: txHash
    });

    fetch(CONFIG.SCRIPT_URL, { method: 'POST', body })
        .then(res => res.json())
        .then(data => {
            if (data.result !== 'success') throw new Error(data.error || 'Error');
            state.lastPaidEur = parseFloat(data.amount) || state.currentPrice;
            $('pay-steps').hidden = true;
            $('pay-success').hidden = false;
            $('claim-form').reset();
            $('tx-hash').value = '';
            $('char-count').textContent = "0/60";
            fetchData();
        })
        .catch(err => {
            status.textContent = err instanceof TypeError ? t('status_network') : err.message;
        })
        .finally(() => { btn.disabled = false; });
}

// --- CONDIVISIONE ---
function shareText() {
    if (state.lastPaidEur) return t('share_me', { price: formatEur(state.lastPaidEur) });
    if (hasKing()) return t('share_king', { king: state.data.current_king, price: formatEur(parseFloat(state.data.current_king_price) || 0) });
    return t('share_empty');
}

function share(channel) {
    const text = shareText();
    const url = CONFIG.SITE_URL;
    const enc = encodeURIComponent;
    const targets = {
        x: `https://twitter.com/intent/tweet?text=${enc(text)}&url=${enc(url)}`,
        telegram: `https://t.me/share/url?url=${enc(url)}&text=${enc(text)}`,
        whatsapp: `https://wa.me/?text=${enc(text + ' ' + url)}`
    };
    if (channel === 'copy') {
        if (navigator.share && matchMedia('(pointer: coarse)').matches) {
            navigator.share({ title: 'Altar', text, url }).catch(() => {});
        } else {
            copyText(`${text} ${url}`);
        }
        return;
    }
    window.open(targets[channel], '_blank', 'noopener');
}

function copyText(text) {
    navigator.clipboard.writeText(text).then(() => toast(t('copied'))).catch(() => {});
}

let toastTimer;
function toast(msg) {
    const el = $('toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 1800);
}

// --- LEGALE ---
function openLegal(type) {
    const doc = LEGAL_TEXTS[state.lang][type];
    $('legal-title').textContent = doc.title;
    $('legal-content').innerHTML = doc.html;
    $('legal-dialog').showModal();
}

// --- AUDIO (caricato solo se l'utente lo attiva) ---
function toggleSound() {
    const audio = $('altar-audio');
    if (audio.paused) {
        audio.volume = 0.25;
        audio.play().catch(() => {});
    } else {
        audio.pause();
    }
}

function updateSoundLabel() {
    const on = !$('altar-audio').paused;
    $('sound-btn').textContent = t(on ? 'sound_on' : 'sound_off');
    $('sound-btn').setAttribute('aria-pressed', String(on));
}

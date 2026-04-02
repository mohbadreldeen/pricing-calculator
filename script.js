window.priceCalculator = function () {
    return {
        // ── State ───────────────────────────────────────────────
        exhibitors: 1100,
        sliderProgress: 0,
        selectedPlan: "advanced",
        showLearnMore: false,
        showShare: false,
        showCountryDropdown: false,
        countryDropdownDirection: "down",
        compareExpanded: false,
        shareLink: "invisual.com/share/your-custom-map",
        copied: false,
        countrySearch: "",
        additionalFeatures: 0,
        _modalKeydownBound: null,

        // ── Prices ───────────────────────────────────────────────
        advancedPrice: 6550,
        standardPrice: 3900,

        // ── Add-ons ──────────────────────────────────────────────
        addons: [
            {
                id: 1,
                name: "Map Marketing Video",
                price: 300,
                selected: true,
                isFree: false,
            },
            {
                id: 2,
                name: "Marketing Hub",
                price: 800,
                selected: true,
                isFree: false,
            },
            {
                id: 3,
                name: "Interactive Sectors Map",
                price: 300,
                selected: false,
                isFree: false,
            },
            {
                id: 4,
                name: "Overview Mode",
                price: 350,
                selected: true,
                isFree: true,
            },
            {
                id: 5,
                name: "PWA Light App",
                price: 300,
                selected: false,
                isFree: false,
            },
            {
                id: 6,
                name: "Mega Show",
                price: 2500,
                selected: false,
                isFree: false,
            },
        ],

        // ── Feature comparison data ──────────────────────────────
        features: [
            {
                id: "live",
                name: "Live Example",
                advanced: true,
                standard: true,
                learnMore: true,
            },
            {
                id: "support",
                name: "Support & Edits",
                advanced: "Premium & Unlimited Support",
                standard: "Standard Support",
                learnMore: true,
            },
            {
                id: "360",
                name: "360 and 3D rotatable map",
                advanced: true,
                standard: true,
                learnMore: true,
            },
            {
                id: "qr",
                name: "QR positioning",
                advanced: true,
                standard: true,
                learnMore: false,
            },
            {
                id: "live-event",
                name: "Map live before event",
                advanced: "For 3-8 Weeks",
                standard: "For 10 days",
                learnMore: true,
            },
            {
                id: "filters",
                name: "Fully customizable filters",
                advanced: "Advanced Customization",
                standard: "Limited",
                learnMore: false,
            },
            {
                id: "analytics",
                name: "Analytics report",
                advanced: true,
                standard: true,
                learnMore: false,
            },
            {
                id: "agenda",
                name: "Agenda integration",
                advanced: true,
                standard: true,
                learnMore: false,
            },
            {
                id: "sponsors",
                name: "Sponsors recognition tools",
                advanced: true,
                standard: false,
                learnMore: false,
            },
            {
                id: "3d-env",
                name: "3D Environment",
                advanced: true,
                standard: false,
                learnMore: true,
            },
            {
                id: "3d-stages",
                name: "Custom 3D stages & features",
                advanced: "Up to 3 Included",
                standard: false,
                learnMore: true,
            },
            {
                id: "web-int",
                name: "Website integration support",
                advanced: true,
                standard: false,
                learnMore: false,
            },
            {
                id: "helpdesk",
                name: "Help desk mode",
                advanced: true,
                standard: false,
                learnMore: false,
            },
            {
                id: "gps",
                name: "GPS positioning",
                advanced: true,
                standard: false,
                learnMore: false,
            },
            {
                id: "ai",
                name: "AI Summaries & translation",
                advanced: true,
                standard: false,
                learnMore: false,
            },
            {
                id: "tours",
                name: "Custom tours",
                advanced: true,
                standard: false,
                learnMore: false,
            },
            {
                id: "audit",
                name: "Exhibitor data auditing report",
                advanced: true,
                standard: false,
                learnMore: false,
            },
        ],

        // ── Countries ────────────────────────────────────────────
        countryFlagAssets: {
            AE: "AE.svg",
            AR: "argentina.svg",
            AM: "armenia.svg",
            BH: "bahrain.svg",
            BE: "belgium.svg",
            BJ: "benin.svg",
            CA: "canada.svg",
            CN: "china.svg",
            DK: "denmark.svg",
        },

        countries: [
            { code: "AE", name: "UAE", flag: "🇦🇪", discount: 15 },
            { code: "AR", name: "Argentina", flag: "🇦🇷", discount: 10 },
            { code: "AM", name: "Armenia", flag: "🇦🇲", discount: 10 },
            { code: "BH", name: "Bahrain", flag: "🇧🇭", discount: 15 },
            { code: "BE", name: "Belgium", flag: "🇧🇪", discount: 10 },
            { code: "BJ", name: "Benin", flag: "🇧🇯", discount: 10 },
            { code: "CA", name: "Canada", flag: "🇨🇦", discount: 5 },
            { code: "CN", name: "China", flag: "🇨🇳", discount: 10 },
            { code: "DK", name: "Denmark", flag: "🇩🇰", discount: 15 },
            { code: "EG", name: "Egypt", flag: "🇪🇬", discount: 12 },
            { code: "FR", name: "France", flag: "🇫🇷", discount: 8 },
            { code: "DE", name: "Germany", flag: "🇩🇪", discount: 10 },
            { code: "IN", name: "India", flag: "🇮🇳", discount: 15 },
            { code: "IT", name: "Italy", flag: "🇮🇹", discount: 10 },
            { code: "JP", name: "Japan", flag: "🇯🇵", discount: 12 },
            { code: "MX", name: "Mexico", flag: "🇲🇽", discount: 10 },
            { code: "NL", name: "Netherlands", flag: "🇳🇱", discount: 8 },
            { code: "NO", name: "Norway", flag: "🇳🇴", discount: 15 },
            { code: "PL", name: "Poland", flag: "🇵🇱", discount: 12 },
            { code: "PT", name: "Portugal", flag: "🇵🇹", discount: 10 },
            { code: "ES", name: "Spain", flag: "🇪🇸", discount: 10 },
            { code: "SE", name: "Sweden", flag: "🇸🇪", discount: 15 },
            { code: "CH", name: "Switzerland", flag: "🇨🇭", discount: 8 },
            { code: "GB", name: "United Kingdom", flag: "🇬🇧", discount: 10 },
            { code: "US", name: "United States", flag: "🇺🇸", discount: 5 },
        ],

        selectedCountry: null,

        // ── Computed ─────────────────────────────────────────────
        get mapTypePrice() {
            return this.selectedPlan === "advanced"
                ? this.advancedPrice
                : this.standardPrice;
        },

        get addonsTotal() {
            let total = this.addons.reduce((sum, a) => {
                return sum + (a.selected && !a.isFree ? a.price : 0);
            }, 0);
            total += this.additionalFeatures * 800;
            return total;
        },

        get discountTotal() {
            const pct = this.selectedCountry
                ? this.selectedCountry.discount
                : 15;
            return Math.round(
                ((this.mapTypePrice + this.addonsTotal) * pct) / 100
            );
        },

        get totalCost() {
            return (
                this.mapTypePrice +
                this.addonsTotal -
                this.discountTotal +
                this.exhibitors
            );
        },

        get tooltipLeft() {
            return Math.max(2, Math.min(98, this.sliderProgress));
        },

        get filteredCountries() {
            if (!this.countrySearch) return this.countries;
            const q = this.countrySearch.toLowerCase();
            return this.countries.filter((c) =>
                c.name.toLowerCase().includes(q)
            );
        },

        getCountryFlagSrc(country) {
            if (!country) return "";
            const assetFile = this.countryFlagAssets[country.code];
            return assetFile ? `assets/${assetFile}` : "";
        },

        // ── Methods ──────────────────────────────────────────────
        init() {
            this.selectedCountry = this.countries.find((c) => c.name === "UAE");
            this.updateSliderProgress();
            window.addEventListener("close-modals", () => this.closeModals());
        },

        updateSlider(e) {
            this.exhibitors = parseInt(e.target.value);
            this.updateSliderProgress();
        },

        updateSliderProgress() {
            this.sliderProgress =
                ((this.exhibitors - 100) / (2600 - 100)) * 100;
        },

        selectPlan(plan) {
            this.selectedPlan = plan;
        },

        incrementFeatures() {
            this.additionalFeatures++;
        },

        decrementFeatures() {
            if (this.additionalFeatures > 0) this.additionalFeatures--;
        },

        selectCountry(country) {
            this.selectedCountry = country;
            this.showCountryDropdown = false;
        },

        copyLink() {
            navigator.clipboard
                .writeText(this.shareLink)
                .then(() => {
                    this.copied = true;
                    setTimeout(() => {
                        this.copied = false;
                    }, 2000);
                })
                .catch(() => {
                    const inp = document.createElement("input");
                    inp.value = this.shareLink;
                    document.body.appendChild(inp);
                    inp.select();
                    document.execCommand("copy");
                    document.body.removeChild(inp);
                    this.copied = true;
                    setTimeout(() => {
                        this.copied = false;
                    }, 2000);
                });
        },

        openLearnMore() {
            this.showLearnMore = true;
            this.enableModalFocusTrap();
        },

        openShare() {
            this.showShare = true;
            this.enableModalFocusTrap();
        },

        toggleCountryDropdown() {
            this.showCountryDropdown = !this.showCountryDropdown;
            if (this.showCountryDropdown) {
                this.$nextTick(() => this.updateCountryDropdownDirection());
            }
        },

        closeCountryDropdown() {
            this.showCountryDropdown = false;
        },

        updateCountryDropdownDirection() {
            const btn = this.$refs.countryBtn;
            const dropdown = this.$refs.countryDropdown;
            if (!btn || !dropdown) return;

            const btnRect = btn.getBoundingClientRect();
            const spaceAbove = btnRect.top;
            const spaceBelow = window.innerHeight - btnRect.bottom;
            const needed = Math.min(dropdown.scrollHeight + 8, 300);

            this.countryDropdownDirection =
                spaceAbove > spaceBelow && spaceAbove >= needed ? "up" : "down";
        },

        closeModals() {
            this.showLearnMore = false;
            this.showShare = false;
            this.showCountryDropdown = false;
            this.disableModalFocusTrap();
        },

        enableModalFocusTrap() {
            if (this._modalKeydownBound) return;
            this._modalKeydownBound = (e) => {
                if (e.key !== "Tab") return;
                const sel =
                    'a[href],button:not([disabled]),input:not([disabled]),textarea,[tabindex]:not([tabindex="-1"])';
                const modal = Array.from(
                    document.querySelectorAll(".modal-overlay")
                ).find((m) => getComputedStyle(m).display !== "none");
                if (!modal) return;
                const nodes = Array.from(modal.querySelectorAll(sel)).filter(
                    (el) => el.offsetParent !== null
                );
                if (!nodes.length) {
                    e.preventDefault();
                    return;
                }
                if (e.shiftKey && document.activeElement === nodes[0]) {
                    e.preventDefault();
                    nodes[nodes.length - 1].focus();
                } else if (
                    !e.shiftKey &&
                    document.activeElement === nodes[nodes.length - 1]
                ) {
                    e.preventDefault();
                    nodes[0].focus();
                }
            };
            window.addEventListener("keydown", this._modalKeydownBound);
            setTimeout(() => {
                const modal = Array.from(
                    document.querySelectorAll(".modal-overlay")
                ).find((m) => getComputedStyle(m).display !== "none");
                if (!modal) return;
                const sel =
                    'a[href],button:not([disabled]),input:not([disabled]),textarea,[tabindex]:not([tabindex="-1"])';
                const first = modal.querySelectorAll(sel)[0];
                if (first) first.focus();
            }, 50);
        },

        disableModalFocusTrap() {
            if (!this._modalKeydownBound) return;
            window.removeEventListener("keydown", this._modalKeydownBound);
            this._modalKeydownBound = null;
        },
    };
};

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape")
        window.dispatchEvent(new CustomEvent("close-modals"));
});

/**
 * AI Pro Converter - Ultimate AI Assistant
 * Version 2.0 - Advanced Natural Language Processing
 */

const AI = {
    responses: {},
    isTyping: false,
    conversationHistory: [],

    init() {
        this.loadResponses();
        this.setupMessageInput();
        this.loadConversationHistory();
    },

    loadResponses() {
        this.responses = {
            greetings: [
                'Salom! 👋 Men AI Pro Converter assistentiman. Sizga qanday yordam bera olaman?',
                'Assalomu alaykum! 🌟 Fayllaringizni professional darajada convert qilishda yordam beraman!',
                'Xush kelibsiz! 🚀 Qaysi formatni convert qilmoqchisiz?',
                'Hayrli kun! ✨ Professional konverter xizmatida!'
            ],

            help: `
                <div style="line-height: 1.9;">
                    <h3 style="color: #667eea; margin-bottom: 20px;">📚 AI Pro Converter - To'liq Qo'llanma</h3>
                    
                    <div style="background: rgba(102, 126, 234, 0.1); padding: 15px; border-radius: 10px; margin-bottom: 20px;">
                        <h4 style="color: #667eea; margin-bottom: 10px;">🔄 Qo'llab-quvvatlanadigan Konvertatsiyalar:</h4>
                        <ul style="margin-left: 20px; line-height: 2;">
                            <li><strong>Excel/CSV</strong> → PDF, TXT, HTML, JSON</li>
                            <li><strong>Word (DOCX)</strong> → PDF, TXT, HTML</li>
                            <li><strong>PDF</strong> → TXT, HTML (matn chiqarish)</li>
                            <li><strong>TXT</strong> → PDF, HTML, XLSX</li>
                            <li><strong>JSON/XML</strong> → XLSX, CSV, HTML, TXT</li>
                            <li><strong>HTML/CSS/JS</strong> → PDF, TXT</li>
                            <li><strong>Rasmlar</strong> → PDF, format o'zgartirish</li>
                        </ul>
                    </div>

                    <h4 style="margin-top: 25px; color: #667eea;">💡 Qanday Ishlatish:</h4>
                    <ol style="margin-left: 20px; line-height: 2;">
                        <li><strong>Faylni yuklang:</strong> "Faylni yuklang" tugmasini bosing yoki drag & drop qiling</li>
                        <li><strong>Format tanlang:</strong> Ko'rsatiladigan format tugmalaridan birini tanlang</li>
                        <li><strong>Yuklab oling:</strong> Fayl avtomatik yuklab olinadi!</li>
                    </ol>

                    <h4 style="margin-top: 25px; color: #667eea;">⚡ Tez Buyruqlar:</h4>
                    <ul style="margin-left: 20px; line-height: 2;">
                        <li><strong>"excel"</strong> - Excel haqida batafsil</li>
                        <li><strong>"pdf"</strong> - PDF konvertatsiya</li>
                        <li><strong>"word"</strong> - Word hujjatlar</li>
                        <li><strong>"formatlar"</strong> - Barcha formatlar ro'yxati</li>
                        <li><strong>"maslahat"</strong> - Professional maslahatlar</li>
                        <li><strong>"admin"</strong> - Admin bilan bog'lanish</li>
                    </ul>

                    <h4 style="margin-top: 25px; color: #667eea;">📞 Yordam:</h4>
                    <p>Muammo yuzaga keldimi? "admin" yoki "muammo" deb yozing va admin sizga yordam beradi!</p>

                    <div style="margin-top: 20px; padding: 15px; background: rgba(79, 172, 254, 0.1); border-radius: 10px;">
                        <p style="margin: 0;">💡 <strong>Pro maslahat:</strong> Katta fayllar uchun (10MB+) konvertatsiya biroz vaqt olishi mumkin. Sabr qiling! 😊</p>
                    </div>
                </div>
            `,

            guide: `
                <div style="line-height: 1.9;">
                    <h3 style="color: #667eea; margin-bottom: 20px;">📖 Boshlang'ich Qo'llanma</h3>
                    
                    <div style="background: rgba(102, 126, 234, 0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px;">
                        <h4 style="color: #667eea; margin-bottom: 15px;">1️⃣ Fayl Yuklash</h4>
                        <p>Faylni ikki usulda yuklashingiz mumkin:</p>
                        <ul style="margin-left: 20px; margin-top: 10px;">
                            <li>📁 "Faylni yuklang" tugmasini bosing</li>
                            <li>🖱️ Faylni yuklash maydoniga sudrab olib keling (drag & drop)</li>
                        </ul>
                    </div>

                    <div style="background: rgba(79, 172, 254, 0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px;">
                        <h4 style="color: #4facfe; margin-bottom: 15px;">2️⃣ Format Tanlash</h4>
                        <p>Fayl yuklangandan keyin, quyidagi format tugmalari paydo bo'ladi. Kerakli formatni tanlang:</p>
                        <ul style="margin-left: 20px; margin-top: 10px;">
                            <li>📕 PDF - Universal format</li>
                            <li>📊 CSV - Ma'lumotlar bazasi</li>
                            <li>📝 TXT - Oddiy matn</li>
                            <li>🌐 HTML - Veb sahifa</li>
                        </ul>
                    </div>

                    <div style="background: rgba(240, 147, 251, 0.05); padding: 20px; border-radius: 12px;">
                        <h4 style="color: #f093fb; margin-bottom: 15px;">3️⃣ Yuklab Olish</h4>
                        <p>Konvertatsiya tugagach, fayl avtomatik yuklab olinadi! 🎉</p>
                        <p style="margin-top: 10px; color: var(--gray); font-size: 14px;">
                            💡 Agar fayl yuklanmasa, brauzeringizning yuklanmalar papkasini tekshiring.
                        </p>
                    </div>
                </div>
            `,

            excel: `
                <div style="line-height: 1.9;">
                    <h3 style="color: #667eea; margin-bottom: 20px;">📊 Excel & CSV - Professional Guide</h3>
                    
                    <div style="background: rgba(0, 255, 100, 0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px;">
                        <h4 style="color: #00ff64; margin-bottom: 15px;">✅ Qo'llab-quvvatlanadigan Formatlar:</h4>
                        <ul style="margin-left: 20px; line-height: 2;">
                            <li><strong>XLSX</strong> - Microsoft Excel (2007+)</li>
                            <li><strong>XLS</strong> - Eski Excel formati</li>
                            <li><strong>CSV</strong> - Comma-Separated Values</li>
                        </ul>
                    </div>

                    <div style="background: rgba(102, 126, 234, 0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px;">
                        <h4 style="color: #667eea; margin-bottom: 15px;">🔄 Convert Imkoniyatlari:</h4>
                        <ul style="margin-left: 20px; line-height: 2;">
                            <li>📕 <strong>PDF</strong> - Professional hisobot, chop etish</li>
                            <li>📊 <strong>CSV</strong> - Database import, Excel</li>
                            <li>📝 <strong>TXT</strong> - Oddiy matn formati</li>
                            <li>🌐 <strong>HTML</strong> - Veb jadval, onlayn ko'rish</li>
                            <li>📋 <strong>JSON</strong> - API, dasturlash</li>
                        </ul>
                    </div>

                    <div style="background: rgba(255, 210, 0, 0.05); padding: 20px; border-radius: 12px;">
                        <h4 style="color: #ffd200; margin-bottom: 15px;">💡 Professional Maslahatlar:</h4>
                        <ul style="margin-left: 20px; line-height: 2;">
                            <li>🎯 Katta jadvallar (10,000+ qator) uchun CSV tavsiya etiladi</li>
                            <li>📊 Ma'lumotlar tahlili uchun JSON optimal</li>
                            <li>📄 Chop etish uchun PDF eng yaxshi tanlov</li>
                            <li>🌐 Veb saytda ko'rsatish uchun HTML ishlatiladi</li>
                        </ul>
                    </div>
                </div>
            `,

            pdf: `
                <div style="line-height: 1.9;">
                    <h3 style="color: #667eea; margin-bottom: 20px;">📕 PDF - Complete Guide</h3>
                    
                    <div style="background: rgba(255, 87, 108, 0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px;">
                        <h4 style="color: #f5576c; margin-bottom: 15px;">📄 PDF nima?</h4>
                        <p>PDF (Portable Document Format) - universal hujjat formati. Har qanday qurilmada bir xil ko'rinadi.</p>
                    </div>

                    <div style="background: rgba(79, 172, 254, 0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px;">
                        <h4 style="color: #4facfe; margin-bottom: 15px;">🔄 PDF Konvertatsiyasi:</h4>
                        <p><strong>PDF dan chiqarish:</strong></p>
                        <ul style="margin-left: 20px; margin-top: 10px; line-height: 2;">
                            <li>📝 <strong>TXT</strong> - Toza matn (tahrirlash uchun)</li>
                            <li>🌐 <strong>HTML</strong> - Veb format (onlayn ko'rish)</li>
                        </ul>
                        
                        <p style="margin-top: 20px;"><strong>PDF ga aylantirish:</strong></p>
                        <ul style="margin-left: 20px; margin-top: 10px; line-height: 2;">
                            <li>📊 Excel, CSV → PDF</li>
                            <li>📘 Word → PDF</li>
                            <li>📝 TXT → PDF</li>
                            <li>🌐 HTML → PDF</li>
                        </ul>
                    </div>

                    <div style="background: rgba(255, 210, 0, 0.05); padding: 20px; border-radius: 12px;">
                        <h4 style="color: #ffd200; margin-bottom: 15px;">⚠️ Muhim Eslatmalar:</h4>
                        <ul style="margin-left: 20px; line-height: 2;">
                            <li>🖼️ Skanerlangan PDF'lardan matn chiqmaydi (rasm sifatida)</li>
                            <li>📄 Eng yaxshi natija uchun matnli PDF ishlatiladi</li>
                            <li>🔒 Parol bilan himoyalangan PDF'lar qo'llab-quvvatlanmaydi</li>
                            <li>📏 Maksimal hajm: 50MB</li>
                        </ul>
                    </div>
                </div>
            `,

            word: `
                <div style="line-height: 1.9;">
                    <h3 style="color: #667eea; margin-bottom: 20px;">📘 Word Documents - Guide</h3>
                    
                    <div style="background: rgba(102, 126, 234, 0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px;">
                        <h4 style="color: #667eea; margin-bottom: 15px;">📄 Qo'llab-quvvatlanadigan:</h4>
                        <ul style="margin-left: 20px; line-height: 2;">
                            <li><strong>DOCX</strong> - Microsoft Word (2007+) ✅ Tavsiya etiladi</li>
                            <li><strong>DOC</strong> - Eski Word formati</li>
                        </ul>
                    </div>

                    <div style="background: rgba(79, 172, 254, 0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px;">
                        <h4 style="color: #4facfe; margin-bottom: 15px;">🔄 Konvertatsiya:</h4>
                        <ul style="margin-left: 20px; line-height: 2;">
                            <li>📕 <strong>PDF</strong> - Universal, chop etish</li>
                            <li>📝 <strong>TXT</strong> - Oddiy matn</li>
                            <li>🌐 <strong>HTML</strong> - Veb sahifa</li>
                        </ul>
                    </div>

                    <div style="background: rgba(0, 255, 100, 0.05); padding: 20px; border-radius: 12px;">
                        <h4 style="color: #00ff64; margin-bottom: 15px;">💡 Maslahatlar:</h4>
                        <ul style="margin-left: 20px; line-height: 2;">
                            <li>📄 DOCX yangi va yaxshi format</li>
                            <li>🖼️ Rasmlar ham konvert qilinadi</li>
                            <li>📐 Formatlanish saqlangan holda</li>
                            <li>📏 Maksimal: 50MB</li>
                        </ul>
                    </div>
                </div>
            `,

            formats: `
                <div style="line-height: 1.9;">
                    <h3 style="color: #667eea; margin-bottom: 20px;">📋 Barcha Formatlar Ro'yxati</h3>
                    
                    <div style="display: grid; gap: 15px;">
                        <div style="background: rgba(102, 126, 234, 0.05); padding: 15px; border-radius: 10px;">
                            <h4 style="color: #667eea;">📊 Spreadsheets</h4>
                            <p style="margin-top: 10px;">XLSX, XLS, CSV → PDF, TXT, HTML, JSON</p>
                        </div>

                        <div style="background: rgba(79, 172, 254, 0.05); padding: 15px; border-radius: 10px;">
                            <h4 style="color: #4facfe;">📘 Documents</h4>
                            <p style="margin-top: 10px;">DOCX, DOC → PDF, TXT, HTML</p>
                        </div>

                        <div style="background: rgba(255, 87, 108, 0.05); padding: 15px; border-radius: 10px;">
                            <h4 style="color: #f5576c;">📕 PDF</h4>
                            <p style="margin-top: 10px;">PDF → TXT, HTML (matn chiqarish)</p>
                        </div>

                        <div style="background: rgba(0, 255, 100, 0.05); padding: 15px; border-radius: 10px;">
                            <h4 style="color: #00ff64;">📝 Text Files</h4>
                            <p style="margin-top: 10px;">TXT → PDF, HTML, XLSX</p>
                        </div>

                        <div style="background: rgba(240, 147, 251, 0.05); padding: 15px; border-radius: 10px;">
                            <h4 style="color: #f093fb;">💻 Code Files</h4>
                            <p style="margin-top: 10px;">JSON, XML, HTML, CSS, JS → multiple formats</p>
                        </div>

                        <div style="background: rgba(255, 210, 0, 0.05); padding: 15px; border-radius: 10px;">
                            <h4 style="color: #ffd200;">🖼️ Images</h4>
                            <p style="margin-top: 10px;">PNG, JPG, JPEG → PDF, format conversion</p>
                        </div>
                    </div>
                </div>
            `,

            tips: `
                <div style="line-height: 1.9;">
                    <h3 style="color: #667eea; margin-bottom: 20px;">💡 Professional Maslahatlar</h3>
                    
                    <div style="background: rgba(102, 126, 234, 0.05); padding: 20px; border-radius: 12px; margin-bottom: 15px;">
                        <h4 style="color: #667eea;">🚀 Tezlik</h4>
                        <ul style="margin-left: 20px; margin-top: 10px; line-height: 2;">
                            <li>Kichik fayllar (1MB gacha) - 1-2 soniya</li>
                            <li>O'rta fayllar (5MB gacha) - 3-5 soniya</li>
                            <li>Katta fayllar (10MB+) - 10-20 soniya</li>
                        </ul>
                    </div>

                    <div style="background: rgba(79, 172, 254, 0.05); padding: 20px; border-radius: 12px; margin-bottom: 15px;">
                        <h4 style="color: #4facfe;">📏 Hajm Chegaralari</h4>
                        <ul style="margin-left: 20px; margin-top: 10px; line-height: 2;">
                            <li>Maksimal fayl hajmi: 50MB</li>
                            <li>PDF: Cheksiz sahifalar</li>
                            <li>Excel: 100,000 qator</li>
                        </ul>
                    </div>

                    <div style="background: rgba(0, 255, 100, 0.05); padding: 20px; border-radius: 12px;">
                        <h4 style="color: #00ff64;">✅ Best Practices</h4>
                        <ul style="margin-left: 20px; margin-top: 10px; line-height: 2;">
                            <li>📊 Ma'lumotlar uchun: CSV yoki JSON</li>
                            <li>📄 Hujjatlar uchun: PDF universal</li>
                            <li>🌐 Veb uchun: HTML optimal</li>
                            <li>💾 Arxiv uchun: XLSX yoki PDF</li>
                        </ul>
                    </div>
                </div>
            `,

            unknown: [
                'Kechirasiz, tushunmadim. 🤔 "yordam" deb yozing yoki aniqroq savol bering!',
                'Bu haqda aniq ma\'lumot bera olmayman. "yordam" yoki "qo\'llanma" deb yozing! 💡',
                'Tushunmadim. Faylni yuklang yoki "yordam" buyrug\'ini ishlating! 📁'
            ],

            thanks: [
                'Arzimaydi! 😊 Yana yordam kerakmi?',
                'Xursand bo\'ldim yordam berganimdan! 🎉 Boshqa savol bormi?',
                'Marhamat! ✨ Yana fayl convert qilamizmi?',
                'Hech gap emas! 💙 Doim xizmatdaman!'
            ]
        };
    },

    setupMessageInput() {
        const input = $('messageInput');
        if (input) {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    this.sendMessage();
                }
            });
        }
    },

    loadConversationHistory() {
        const history = Storage.load(`chat_${Auth.currentUser}`, []);
        this.conversationHistory = history;
    },

    saveConversationHistory() {
        Storage.save(`chat_${Auth.currentUser}`, this.conversationHistory.slice(-50));
    },

    addMessage(type, text) {
        const container = $('chatContainer');
        if (!container) return;

        const message = document.createElement('div');
        message.className = `message message-${type}`;
        
        const time = new Date().toLocaleTimeString('uz-UZ', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        
        message.innerHTML = `
            ${text}
            <div class="message-time">${time}</div>
        `;
        
        container.appendChild(message);
        container.scrollTop = container.scrollHeight;

        // Save to history
        this.conversationHistory.push({
            type: type,
            text: text,
            time: new Date().toISOString()
        });
        this.saveConversationHistory();

        // Update stats for user messages
        if (type === 'user' && typeof Brain !== 'undefined') {
            Brain.userStats.messages++;
            Brain.updateStats();
            Brain.saveUserStats();
        }
    },

    async sendMessage() {
        const input = $('messageInput');
        const message = input.value.trim();

        if (!message || this.isTyping) return;

        this.addMessage('user', message);
        input.value = '';

        Utils.log(Auth.currentUser, `AI xabar: ${message.substring(0, 50)}...`, 'message');

        this.showTyping();

        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const response = await this.processMessage(message);
        
        this.hideTyping();
        this.addMessage('ai', response);
    },

    async processMessage(message) {
        const lower = message.toLowerCase();

        // Greetings
        if (this.matchPattern(lower, ['salom', 'assalom', 'hello', 'hi', 'hey', 'hayr'])) {
            return this.getRandomResponse(this.responses.greetings);
        }

        // Help
        if (this.matchPattern(lower, ['yordam', 'help', 'qanday', 'qilib'])) {
            return this.responses.help;
        }

        // Guide
        if (this.matchPattern(lower, ['guide', 'qo\'llanma', 'boshlash', 'o\'rgatib'])) {
            return this.responses.guide;
        }

        // Excel
        if (this.matchPattern(lower, ['excel', 'xlsx', 'xls', 'csv', 'jadval', 'spreadsheet'])) {
            return this.responses.excel;
        }

        // PDF
        if (this.matchPattern(lower, ['pdf', 'portable'])) {
            return this.responses.pdf;
        }

        // Word
        if (this.matchPattern(lower, ['word', 'docx', 'doc', 'hujjat', 'document'])) {
            return this.responses.word;
        }

        // Formats
        if (this.matchPattern(lower, ['format', 'qaysi', 'nima', 'ro\'yxat'])) {
            return this.responses.formats;
        }

        // Tips
        if (this.matchPattern(lower, ['maslahat', 'tip', 'tavsiya', 'professional'])) {
            return this.responses.tips;
        }

        // Admin contact
        if (this.matchPattern(lower, ['admin', 'muammo', 'problem', 'xato', 'error', 'yordam'])) {
            ChatWithAdmin.openChat();
            return `
                <div style="line-height: 1.8;">
                    <h3 style="color: #667eea; margin-bottom: 15px;">💬 Admin Chat Ochildi</h3>
                    <p>Admin bilan to'g'ridan-to'g'ri chat ochildi!</p>
                    <p style="margin-top: 15px;">Muammoingizni yoki savolingizni yozing, admin tez orada javob beradi. 😊</p>
                </div>
            `;
        }

        // Thanks
        if (this.matchPattern(lower, ['rahmat', 'thanks', 'tashakkur', 'spasibo', 'minnatdor'])) {
            return this.getRandomResponse(this.responses.thanks);
        }

        // File upload
        if (this.matchPattern(lower, ['fayl', 'file', 'yukla', 'upload'])) {
            return '📁 Faylni yuklash uchun o\'ng tarafdagi <strong>"Faylni yuklang"</strong> qismiga boring yoki faylni drag & drop qiling!<br><br>💡 <strong>Qo\'llab-quvvatlanadigan:</strong> Excel, Word, PDF, CSV, TXT, JSON, XML, HTML, CSS, JS, Rasmlar';
        }

        // About
        if (this.matchPattern(lower, ['nima', 'kim', 'about', 'haqida'])) {
            return `
                <div style="line-height: 1.8;">
                    <h3 style="color: #667eea; margin-bottom: 15px;">🤖 Men haqimda</h3>
                    <p>Men <strong>AI Pro Converter</strong> ning sun'iy intellekt assistentiman!</p>
                    <p style="margin-top: 15px;">📌 <strong>Vazifam:</strong></p>
                    <ul style="margin-left: 20px; line-height: 2; margin-top: 10px;">
                        <li>Sizga fayllarni convert qilishda yordam berish</li>
                        <li>Formatlar haqida ma'lumot berish</li>
                        <li>Professional maslahatlar berish</li>
                        <li>Savollaringizga javob berish</li>
                    </ul>
                    <p style="margin-top: 15px;">💡 Men 24/7 xizmatdaman!</p>
                </div>
            `;
        }

        // Statistics
        if (this.matchPattern(lower, ['stat', 'statistika', 'hisobot'])) {
            return `
                <div style="line-height: 1.8;">
                    <h3 style="color: #667eea; margin-bottom: 15px;">📊 Sizning Statistikangiz</h3>
                    <ul style="margin-left: 20px; line-height: 2;">
                        <li>📁 Yuklangan fayllar: <strong>${Brain.userStats.files}</strong></li>
                        <li>🔄 Konvertatsiyalar: <strong>${Brain.userStats.converts}</strong></li>
                        <li>💬 Xabarlar: <strong>${Brain.userStats.messages}</strong></li>
                    </ul>
                    <p style="margin-top: 15px;">🎉 Ajoyib natijalar!</p>
                </div>
            `;
        }

        // Default
        return this.getRandomResponse(this.responses.unknown);
    },

    matchPattern(message, patterns) {
        return patterns.some(pattern => message.includes(pattern));
    },

    getRandomResponse(responses) {
        return responses[Math.floor(Math.random() * responses.length)];
    },

    showTyping() {
        this.isTyping = true;
        const loader = $('chatLoader');
        if (loader) loader.classList.remove('hidden');
    },

    hideTyping() {
        this.isTyping = false;
        const loader = $('chatLoader');
        if (loader) loader.classList.add('hidden');
    },

    showHelp() {
        this.addMessage('ai', this.responses.help);
        const container = $('chatContainer');
        if (container) container.scrollTop = container.scrollHeight;
    },

    showGuide() {
        this.addMessage('ai', this.responses.guide);
        const container = $('chatContainer');
        if (container) container.scrollTop = container.scrollHeight;
    },

    clearChat() {
        if (!confirm('Chatni tozalamoqchimisiz?')) return;
        
        const container = $('chatContainer');
        if (container) container.innerHTML = '';
        
        this.conversationHistory = [];
        this.saveConversationHistory();
        
        Utils.notify('Chat tozalandi!', 'success');
        
        // Welcome message
        this.addMessage('ai', `Salom, ${Auth.currentUser}! 👋<br><br>Chat tozalandi. Yangi savol bering yoki faylni yuklang! 😊`);
    }
};

/**
 * Chat with Admin Module
 */
const ChatWithAdmin = {
    isOpen: false,
    currentChatUser: null,

    openChat() {
        const modal = $('userChatModal');
        if (modal) {
            modal.classList.remove('hidden');
            this.isOpen = true;
            this.loadMessages();
            
            // Mark as read
            this.markAsRead();
        }
    },

    closeChat() {
        const modal = $('userChatModal');
        if (modal) {
            modal.classList.add('hidden');
            this.isOpen = false;
        }
    },

    loadMessages() {
        const container = $('userChatMessages');
        if (!container) return;

        const chats = Storage.load('adminChats', {});
        const userChat = chats[Auth.currentUser] || { messages: [], unread: 0 };

        container.innerHTML = '';

        if (userChat.messages.length === 0) {
            container.innerHTML = `
                <div style="text-align: center; padding: 40px; color: var(--gray);">
                    <svg viewBox="0 0 24 24" width="60" height="60" style="opacity: 0.5; margin-bottom: 20px;">
                        <path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                    </svg>
                    <p>Hali xabarlar yo'q</p>
                    <p style="margin-top: 10px; font-size: 14px;">Admin bilan suhbatni boshlang!</p>
                </div>
            `;
            return;
        }

        userChat.messages.forEach(msg => {
            const messageDiv = document.createElement('div');
            messageDiv.className = `chat-message ${msg.from}`;
            messageDiv.innerHTML = `
                <div>${msg.text}</div>
                <div style="font-size: 11px; opacity: 0.7; margin-top: 5px;">${msg.time}</div>
            `;
            container.appendChild(messageDiv);
        });

        container.scrollTop = container.scrollHeight;
    },

    sendMessage() {
        const input = $('userChatInput');
        if (!input) return;

        const message = input.value.trim();
        if (!message) return;

        const chats = Storage.load('adminChats', {});
        if (!chats[Auth.currentUser]) {
            chats[Auth.currentUser] = {
                messages: [],
                unread: 0,
                lastUpdate: new Date().toISOString()
            };
        }

        const time = new Date().toLocaleString('uz-UZ', {
            hour: '2-digit',
            minute: '2-digit',
            day: '2-digit',
            month: '2-digit'
        });

        chats[Auth.currentUser].messages.push({
            from: 'user',
            text: message,
            time: time,
            timestamp: new Date().toISOString()
        });

        chats[Auth.currentUser].lastUpdate = new Date().toISOString();
        chats[Auth.currentUser].unread++;

        Storage.save('adminChats', chats);

        input.value = '';
        this.loadMessages();

        Utils.log(Auth.currentUser, `Admin ga xabar: ${message.substring(0, 30)}...`, 'chat');
        Utils.notify('Xabar yuborildi!', 'success');
    },

    checkUnreadMessages() {
        const chats = Storage.load('adminChats', {});
        const userChat = chats[Auth.currentUser];

        if (!userChat) return;

        const unreadFromAdmin = userChat.messages.filter(
            msg => msg.from === 'admin' && !msg.read
        ).length;

        if (unreadFromAdmin > 0) {
            const badge = $('unreadCount');
            if (badge) {
                badge.textContent = unreadFromAdmin;
                badge.classList.remove('hidden');
            }
        }
    },

    markAsRead() {
        const chats = Storage.load('adminChats', {});
        if (!chats[Auth.currentUser]) return;

        chats[Auth.currentUser].messages.forEach(msg => {
            if (msg.from === 'admin') {
                msg.read = true;
            }
        });

        Storage.save('adminChats', chats);

        const badge = $('unreadCount');
        if (badge) {
            badge.classList.add('hidden');
        }
    }
};

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    AI.init();
});
from pathlib import Path
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.platypus import Paragraph
from reportlab.pdfgen.canvas import Canvas

OUT = Path(__file__).resolve().parents[1] / "public" / "nst-studio-one-pager.pdf"
OUT.parent.mkdir(parents=True, exist_ok=True)

BLUE = HexColor("#0673F9")
INK = HexColor("#16191D")
MUTED = HexColor("#5B6271")
LINE = HexColor("#E1E5EA")
SOFT = HexColor("#F6F7F9")
WHITE = HexColor("#FFFFFF")

W, H = A4
c = Canvas(str(OUT), pagesize=A4)
c.setTitle("NST Studio - One-page overview")
c.setAuthor("NST Studio")

margin = 17 * mm
usable = W - 2 * margin

def text(x, y, value, size=9, color=INK, font="Helvetica", align="left"):
    c.setFont(font, size)
    c.setFillColor(color)
    if align == "right":
        c.drawRightString(x, y, value)
    else:
        c.drawString(x, y, value)

def para(x, y_top, value, width, size=9, leading=13, color=MUTED, font="Helvetica"):
    style = ParagraphStyle("p", fontName=font, fontSize=size, leading=leading, textColor=color, spaceAfter=0)
    p = Paragraph(value, style)
    _, h = p.wrap(width, 80 * mm)
    p.drawOn(c, x, y_top - h)
    return h

def rule(y):
    c.setStrokeColor(LINE)
    c.setLineWidth(.6)
    c.line(margin, y, W - margin, y)

def pill(x, y, label):
    pad = 3.2 * mm
    w = stringWidth(label, "Courier-Bold", 6.7) + 2 * pad
    c.setFillColor(SOFT)
    c.roundRect(x, y - 4.5 * mm, w, 6.5 * mm, 2 * mm, fill=1, stroke=0)
    text(x + pad, y - 2.35 * mm, label, 6.7, MUTED, "Courier-Bold")
    return w

# Header
c.setFillColor(BLUE)
c.rect(0, H - 4 * mm, W, 4 * mm, fill=1, stroke=0)
c.setFillColor(BLUE)
c.roundRect(margin, H - 23 * mm, 9 * mm, 9 * mm, 2 * mm, fill=1, stroke=0)
text(margin + 4.5 * mm, H - 20.1 * mm, "N", 9, WHITE, "Helvetica-Bold")
text(margin + 12 * mm, H - 19.8 * mm, "NST Studio", 13, INK, "Helvetica-Bold")
text(W - margin, H - 19.4 * mm, "MENTOR-LED SOFTWARE ENGINEERING", 6.6, BLUE, "Courier-Bold", "right")

# Hero
hero_top = H - 37 * mm
para(margin, hero_top, "We build MVPs, internal tools and AI features that ship to production.", usable * .74, 23, 26, INK, "Helvetica-Bold")
para(margin, hero_top - 29 * mm, "Senior engineers lead the architecture and review every line. A focused engineering pod builds it. You get production-grade software with a clean handover, on a fixed scope and timeline.", usable * .72, 9.5, 14, MUTED)
c.setFillColor(BLUE)
c.roundRect(W - margin - 44 * mm, hero_top - 26 * mm, 44 * mm, 15 * mm, 3 * mm, fill=1, stroke=0)
text(W - margin - 22 * mm, hero_top - 20.1 * mm, "20-MIN CALL", 7.2, WHITE, "Courier-Bold", "right")
text(W - margin - 22 * mm, hero_top - 24.4 * mm, "Scope your project", 6.2, WHITE, "Helvetica", "right")

rule(H - 89 * mm)

# Capabilities
y = H - 100 * mm
text(margin, y, "WHAT WE BUILD", 7, BLUE, "Courier-Bold")
cols = [
    ("MVPs", "Production-ready first versions with real backends and cloud deployment."),
    ("Internal tools and ERPs", "Dashboards and workflow systems that replace spreadsheets."),
    ("AI features", "Computer vision, LLM workflows and search with human review."),
    ("Backend and cloud", "APIs, integrations, CI/CD and infrastructure that scale."),
]
col_w = (usable - 9 * mm) / 4
for i, (title, body) in enumerate(cols):
    x = margin + i * (col_w + 3 * mm)
    text(x, y - 10 * mm, title, 8.5, INK, "Helvetica-Bold")
    para(x, y - 14 * mm, body, col_w, 7.2, 10, MUTED)

rule(H - 137 * mm)

# Delivery model and packages
y = H - 148 * mm
left_w = usable * .48
right_x = margin + usable * .53
right_w = usable * .47
text(margin, y, "THE DELIVERY MODEL", 7, BLUE, "Courier-Bold")
para(margin, y - 7 * mm, "Mentors", left_w, 9, 11, INK, "Helvetica-Bold")
para(margin, y - 13 * mm, "Tech leads and architects own architecture, review every PR and are accountable for quality.", left_w, 7.5, 10.5, MUTED)
para(margin, y - 29 * mm, "Engineering pod", left_w, 9, 11, INK, "Helvetica-Bold")
para(margin, y - 35 * mm, "Student engineers at Newton School of Technology build features in daily sprints under mentor direction.", left_w, 7.5, 10.5, MUTED)
para(margin, y - 51 * mm, "Delivery coordination", left_w, 9, 11, INK, "Helvetica-Bold")
para(margin, y - 57 * mm, "A single point of contact owns timelines and weekly updates.", left_w, 7.5, 10.5, MUTED)

text(right_x, y, "FIXED-SCOPE PACKAGES", 7, BLUE, "Courier-Bold")
package_lines = [
    ("Discovery and Architecture", "2-3 weeks", "From INR 1.2L"),
    ("MVP Launch Sprint", "4-8 weeks", "From INR 4L"),
    ("Product Acceleration", "8-12 weeks", "From INR 9L"),
    ("Managed Product Pod", "Monthly", "From INR 5L/mo"),
]
py = y - 10 * mm
for name, duration, price in package_lines:
    text(right_x, py, name, 8.2, INK, "Helvetica-Bold")
    text(right_x + right_w, py, price, 7.4, INK, "Courier-Bold", "right")
    text(right_x, py - 4.5 * mm, duration, 6.7, MUTED, "Courier")
    py -= 15 * mm

rule(H - 222 * mm)

# Proof and footer
y = H - 233 * mm
text(margin, y, "PROOF IN PRODUCTION", 7, BLUE, "Courier-Bold")
metrics = [("99.8%", "ERP uptime"), ("<200ms", "p95 API"), ("80%", "less admin work"), ("100+", "production APIs")]
mw = usable / 4
for i, (value, label) in enumerate(metrics):
    x = margin + i * mw
    text(x, y - 10 * mm, value, 13, INK, "Courier-Bold")
    text(x, y - 16 * mm, label, 6.8, MUTED, "Helvetica")
text(margin, y - 24 * mm, "PLACEHOLDER METRICS - PENDING CLIENT CONFIRMATION", 5.8, MUTED, "Courier-Bold")

c.setFillColor(SOFT)
c.rect(0, 0, W, 25 * mm, fill=1, stroke=0)
text(margin, 15 * mm, "A Newton School of Technology initiative", 7.5, INK, "Helvetica-Bold")
text(margin, 9.5 * mm, "EMAIL - PLACEHOLDER", 7, BLUE, "Helvetica-Bold")
text(W - margin, 15 * mm, "Pricing is fixed against scope.", 7, MUTED, "Helvetica", "right")
text(W - margin, 9.5 * mm, "Book a 20-minute scoping call", 7.3, BLUE, "Helvetica-Bold", "right")

c.showPage()
c.save()
print(OUT)

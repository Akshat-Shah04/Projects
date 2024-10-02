import qrcode
import image
qr = qrcode.QRCode(
    version = 15,
    box_size = 10,
    border = 7

)

data = {
    "Name" : "John Doe",
    "Age" : 20,
    "Address" : "NYC",
    "Skills" : ["front-end","python","DBMS","UI/UX"]
}

qr.add_data(data)
qr.make(fit = True)
img = qr.make_image(fill = "black",back_color="white")
img.save('demo1.png')


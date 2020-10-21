function DisplayText(param) {
    var txt;
    switch (param) {
        case 0:
            txt = "<h3>A usernek 3 lehetősége ven driverek frissítésére:</h3><ol><li>A user magának az internetről összegyűjti a drivereket és telepíti (Hozzáértőknek ajánlott)</li><li>A user egy programra bízza a driverek keresését és telepítését (Driver Tracking Service)</li><li>A user ráhagyhatja az OSre. Ez a unix os esetén jó mivel a unix rendszereknek fejlett a csomag és driver csomagkezelőik.Windows esetén ez a lépés nem ajánlott mivel a windows nem mindig a megfelelő drivereket telepíti fel és nem fogja felismerni az adott eszközt.</li></ol>";
            break;
        case 1:
            txt = "<h3>Kéretlen szolgáltatások tiltása:</h3>" +
                "<ol>" +
                "<li>Minden Xbox szolgáltatás, amennyiben nem használod az xboxhoz kapcsolódó szolgáltatásokat,(GamePassService/Xbox GameBar)</li>" +
                "<li>Windows Update ,ezt érdemes letiltani de azonban figyelni kell mert ha esetleg manuálisan frissítesz ez visszakapcsolódik</li>" +
                "<li>Windows Search, ez ajánlott letiltani mivel ez azt végzi hogy a windows tudjon a meghajtón indexelni és ezáltal egyfolytában magas százalékon használni a tárolót</li>" +
                "<li>Összekapcsolt felhasználói élmények , azért érdemes letiltani mivel ez végzi a windows user feltérképezést ami minden információt amit csináltunk változtatás a gépen azt elküldi a windowsnak és azzal kapcsolatban fog reklámot és egyéb zavaró tényezőket is bedobálni nekünk.</li>" +
                "<li>UOS , ez végzi azt a feladatot hogy ha a windows update valamiért nem tud elindulni és frissítést kezelni akkor ez a szolgáltatás veszi át ezt a feladatot</li>" +
                "<li>SySMain, ez a szolgáltatás a CPU üresjárati hardverigényét növeli</li>" +
                "<li>RemoteRegistry, ez a szolgáltatás felelős azért hogy a felhasználó registy fileokat tudjon szerkeszteni(off -> edit//on -> nonedit)</li>" +
                "<li>Előtöltés, ez a szolgáltatás azért felel hogy a windows indulásakor a gyakran használt alkalmazások cachei betöltődjenek a ramba ezáltal is gyosítva az indulást ,azonban lassítani fogja a boot timet és a rendszer futását</li>" +
                "<li>Csatlakoztatott eszközök, ezt akkor szoktuk letiltani ha az adott gép nem csatlakozik semmilyen hálózati eszközhöz sem</li>" +
                "<li>Minden diagnosztikai szolgáltatás, ezt azért szoktuk kikapcsolni mivel ez a rendszer futása közben minket és a lépéseinket diagnosztizálja ezáltal jobban használva az rendszer erőforrásokat</li>" +
                "</ol>";
            break;
        case 2:
            txt = "<h3>Felesleges Értesítések tiltása</h3>" +
                "<p>Ezt a pontot az OOSU10 program elvégzi nem kell egyesével kikapcsolni</p>" +
                "<hr>" +
                "<p>Step I</p>" +
                "<hr>" +
                "<img src=\"/IT/Pictures/o&o/step1.png\" alt=\"Step1\" class=\"kep\"><br>" +
                "<hr>" +
                "<p>Step II</p>" +
                "<hr>" +
                "<img src=\"/IT/Pictures/o&o/step2.png\" alt=\"Step2\" class=\"kep\"><br>" +
                "<hr>" +
                "<p>Step III</p>" +
                "<hr>" +
                "<img src=\"/IT/Pictures/o&o/step3.png\" alt=\"Step3\" class=\"kep\"><br>" +
                "<hr>" +
                "<p>Step IV</p>" +
                "<hr>" +
                "<img src=\"/IT/Pictures/o&o/step4.png\" alt=\"Step4\" class=\"kep\"><br>" +
                "<hr>" +
                "<p>Step V</p>" +
                "<hr>" +
                "<img src=\"/IT/Pictures/o&o/step5.png\" alt=\"Step5\" class=\"kep\"><br>" +
                "<hr>" +
                "<p>Step VI</p>" +
                "<hr>" +
                "<img src=\"/IT/Pictures/o&o/step6.png\" alt=\"Step6\" class=\"kep\"><br>";

            break;
        case 3:
            txt = "eggyes";
            break;
        case 4:
            txt = "eggyes";
            break;
        case 5:
            txt = "eggyes";
            break;
        case 6:
            txt = "eggyes";
            break;
        case 7:
            txt = "eggyes";
            break;
        case 8:
            txt = "eggyes";
            break;
        case 9:
            txt = "eggyes";
            break;
        default:
            txt = "Ez nincs kész válaszd azt ami már kész van :D";
            break;
    }
    document.getElementById('#write').innerHTML = txt;
}
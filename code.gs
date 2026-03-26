function doPost(e) {
  try {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    
    // Получаем параметры запроса формой
    var params = e.parameter || {};
    
    // Если данные пришли в формате JSON (на всякий случай)
    if (Object.keys(params).length === 0 && e.postData && e.postData.contents) {
      try {
        params = JSON.parse(e.postData.contents);
      } catch(err) {}
    }

    // Определяем имя листа, куда сохранять ("offline" или "online")
    var sheetName = params.sheetName || 'offline';
    var sheet = doc.getSheetByName(sheetName);
    
    // Если листа не существует, создаем его автоматически
    if (!sheet) {
      sheet = doc.insertSheet(sheetName);
    }

    var headers = [
      "Дата",
      "Имя",
      "Телефон",
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_content",
      "utm_term",
      "URL страницы"
    ];

    // Проверяем, есть ли уже заголовки (пустая ли таблица)
    var lastRow = sheet.getLastRow();
    if (lastRow === 0) {
      sheet.appendRow(headers);
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight("bold");
    }

    // Подготавливаем строку с данными
    var dateStr = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "dd.MM.yyyy HH:mm:ss");
    
    var rowData = [
      dateStr,
      params.name || '',
      params.phone || '',
      params.utm_source || '',
      params.utm_medium || '',
      params.utm_campaign || '',
      params.utm_content || '',
      params.utm_term || '',
      params.page_url || ''
    ];

    // Записываем данные в таблицу
    sheet.appendRow(rowData);

    // Возвращаем успешный ответ
    return ContentService.createTextOutput(JSON.stringify({"result": "success", "data": rowData}))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Возвращаем ошибку в случае падения
    return ContentService.createTextOutput(JSON.stringify({"result": "error", "error": error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

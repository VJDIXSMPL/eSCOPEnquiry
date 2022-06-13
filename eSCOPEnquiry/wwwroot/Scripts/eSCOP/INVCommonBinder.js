function LoadItemTypesClientWise(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : '-1';
    $.ajax({
        type: 'GET',
        url: '/INVCommonBinder/GetItemTypesClientWise',
        async: false,
        success: function (ItemTypeData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: '-1',
                text: "Choose One"
            }));

            $.each($.parseJSON(ItemTypeData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.ItemTypeID,
                    text: itemData.ItemTypeName
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });
}